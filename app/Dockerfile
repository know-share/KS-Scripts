FROM maven:3.5-jdk-8
MAINTAINER Miguel Montañez <cmiguelmg@gmail.com>

ENV APP_PATH /app
RUN mkdir -p $APP_PATH

WORKDIR $APP_PATH

# Directory for uploads from app
RUN mkdir knowshare_uploads

# Download stable version from GitHub
# RUN curl -LOk https://github.com/know-share/KS-API/archive/master.zip && \
#	unzip master.zip

# Replace properties with values from production environment
COPY application.properties src/main/resources/application.properties

# Info to repository of artifacts
COPY settings.xml settings.xml

# Run app
CMD mvn spring-boot:run --settings=settings.xml
