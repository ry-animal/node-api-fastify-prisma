import Redis from 'ioredis'
import logger from './lib/logger'

/*
 * Redis client that can be used as a cache
 */
const redis = new Redis({
  host: process.env.REDIS_HOST ?? 'localhost',
  port: Number(process.env.REDIS_PORT ?? '63792'),
  username: process.env.REDIS_USER ?? 'default',
  password: process.env.REDIS_PASSWORD,
  enableOfflineQueue: false,
  lazyConnect: false,
  maxRetriesPerRequest: 3
})

export async function get(key: string): Promise<string | null> {
  logger.info(key)
  return await redis.get(key)
}

export async function set(key: string, value: string): Promise<void> {
  logger.info(key, value)
  await redis.set(key, value)
}

//redis.expire(url, 3600)
