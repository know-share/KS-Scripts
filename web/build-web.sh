#!/bin/bash

curl -LOk https://github.com/know-share/KS-Web/archive/master.zip &&\
unzip master.zip &&\
cd KS-Web-master &&\
cp ../constants.ts src/app/entities/constants.ts &&\
npm install && npm run build:prod &&\
mv dist/ ../ && cd .. &&\
rm -rf KS-Web-master master.zip

# docker build -t ks_web web/ &&\
# docker run -d -p 80:80 ks_web