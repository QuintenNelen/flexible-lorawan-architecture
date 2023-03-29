#!/bin/sh

set -e
influx bucket create -n sis -o AP -r 0d
influx bucket create -n test -o AP -r 0d
influx bucket create -n mqtt-logging -o AP -r 0d
#influx bucket create -n flwsb -o AP -r 0d
