# Below image is from DTP:
FROM parasoft/dtp-extension-designer:2026.2.0

WORKDIR /data

# below "lib" folder at the same lavel as Dockerfile
# below "*.jar" is in the lib folder and need to be specific for database. In this case is for mysql 8.0
# IMPORTANT: More likely /usr/local/parasoft/data are replaced by /usr/local/parasoft/data-tmp that is created and removed
# Below command COPY are using data-tmp. Mentioned folder during the build replace all content in data folder

COPY mysql-connector-java-8.0.28.jar /usr/local/parasoft/data-tmp/lib/thirdparty/

COPY /conf/. /usr/local/parasoft/data-tmp/conf/

COPY /_cert2026/. /usr/local/parasoft/dtp/tomcat/conf/_cert2026/
COPY server.xml /usr/local/parasoft/dtp/tomcat/conf/

COPY ssl.config.js /usr/local/parasoft/data-tmp/dtpservices/shared/

WORKDIR /usr/local/parasoft

# below commented RUN is to check if jar was copied.
#RUN dir /usr/local/parasoft/data/lib/thirdparty/