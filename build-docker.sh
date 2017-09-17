#!/bin/bash

# Number of arguments must be 1: backend or frontend
if [ $# == 1 ]
then
  if [ $1 == 'backend' ]
  then
    docker-compose -d up mongo ks_api
  fi
  if [ $1 == 'frontend' ]
  then
    cd web
    sh build-web.sh
    cd .. && docker-compose -d up ks_web
  fi
else
  echo 'The script needs an argument, it can be: backend or frontend'
fi
