# Below image is from mysql dockerhub:
FROM mysql:8

ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=DTP
ENV MYSQL_USER=dtp
ENV MYSQL_PASSWORD=root
ENV ACCEPT_EULA=Y

# adding the script and build database automaticlly after container starts
ADD create.sql /docker-entrypoint-initdb.d