import { PrismaClient } from '@prisma/client'
import logger from '../src/lib/logger'

export const prisma = new PrismaClient({
  log: [
    { level: 'info', emit: 'event' },
    { level: 'query', emit: 'event' },
    { level: 'error', emit: 'event' },
    { level: 'warn', emit: 'event' }
  ]
})

//TODO add error type
prisma.$on('query', (e: any) => {
  logger.debug(e)
})

prisma.$on('error', (e: any) => {
  logger.error(e)
})

prisma.$on('warn', (e: any) => {
  logger.warn(e)
})

prisma.$on('info', (e: any) => {
  logger.info(e)
})
