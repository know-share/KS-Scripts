#!/bin/bash

git clone https://github.com/know-share/KS-Web.git &&\
cd KS-Web &&\
cp ../constants.ts src/app/entities/constants.ts &&\
npm install && npm run build:prod &&\
mv dist/ ../ && cd .. &&\
rm -rf KS-Web/

# docker build -t ks_web web/ &&\
# docker run -d -p 80:80 ks_web

echo 'Build web successful'