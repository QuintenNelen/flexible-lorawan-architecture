#!/bin/sh

node /data/bcrypt_hash.js $NODE_RED_ROOT_PASSWORD

exec /usr/src/node-red/entrypoint.sh "$@"
