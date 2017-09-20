FROM maven:3.5-jdk-8
MAINTAINER Miguel Montañez <cmiguelmg@gmail.com>

ENV APP_PATH /app
RUN mkdir -p $APP_PATH

WORKDIR $APP_PATH

# Directory for uploads from app
RUN mkdir knowshare_uploads

# Info to repository of artifacts
COPY settings.xml settings.xml

WORKDIR $APP_PATH/KS-API

# Run app
CMD mvn spring-boot:run --settings=/app/settings.xml
