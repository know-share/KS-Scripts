#!/bin/bash

# Number of arguments must be 1: backend or frontend
if [ $# == 1 ]
then
  if [ $1 == 'backend' ]
  then
    cd app
    sh build-api.sh
    cd .. && docker-compose up -d mongo ks_api
  fi
  if [ $1 == 'frontend' ]
  then
    cd web
    sh build-web.sh
    cd .. && docker-compose up -d ks_web
  fi
else
  echo 'The script needs an argument, it can be: backend or frontend'
fi
echo $1' has been built into container(s)'