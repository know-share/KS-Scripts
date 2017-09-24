#!/bin/bash

rm -rf KS-API &&\
git clone https://github.com/know-share/KS-API.git &&\
cp application.properties KS-API/src/main/resources/ &&\
cp keystore.p12 KS-API/src/main/resources/

echo 'Build api successful'