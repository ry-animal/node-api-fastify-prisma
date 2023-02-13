#!/bin/bash

# This script runs when starting the development postgres docker container
# https://hub.docker.com/_/postgres (see initialization scripts)

set -e

psql -v ON_ERROR_STOP=1 --username dev --dbname dev <<-EOSQL
  create extension if not exists citext schema pg_catalog;
EOSQL

psql -v ON_ERROR_STOP=1 --username dev --dbname dev <<-EOSQL
  create extension if not exists citext;
EOSQL
