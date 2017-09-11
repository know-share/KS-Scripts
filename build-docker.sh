#!/bin/bash

cd web
sh build-web.sh
cd .. && docker-compose -d up