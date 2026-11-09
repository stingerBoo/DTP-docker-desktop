# DTP-docker-desktop
Parasoft DTP on Docker Desktop or WSL Docker Engine or Physical Machine

Docker Desktop version or under WSL with docker Engine.
MachineID is not stable but restarting the container or Docker does not harm it - it is fixed.
MachineID can be permanent on not virtualize machine(Docker Desktop, WSL) - see service DTP and volume.
To have permanent and stable machineID you need to use physical machine not virtualize one.
This Yaml is to demonstrate how to create containers and services - it is not a guide.

If it's a fresh instalation of Docker, download in WSL version of Ubuntu at least 20.04 and make it default.
# --- Optional ---
Restart Docker desktop tool.
remove old cached data:
sudo docker builder prune -a -f

# --- Mandatory ---
 -- Create Images and Containers -- (3 options, use one of them)
1. run command from folder where file exists in WSL using: sudo docker compose -f composedtp2026.2_mySQL8.yaml up --build --force-recreate
2. build from scratch if you use above optional option prune: sudo docker compose -f composedtp2026.2_mySQL8.yaml up --build
3. older version: sudo docker-compose -f composedtp2026.2_mySQL8.yaml up --build --force-recreate

Description of 4 services and global variable with network
# === Global variable with network === :
1. Contains internal IP addresses of the containers and link services
2. The last is network which is a mandatory for all services

# === Service config-automator === :
Adjusting the file "PSTRootConfig.xml" by changing the IP address - important for mySQL

# === Service mySQL_8 === :
Creates container and DTP database from script(dockerMysql/create.sql)

# === Service mongoDB === :
Need for DTP Extension Designer

# === Service DTP === :
Creates the DTP and managing some files - see "dockerDTP/Dockerfile"
Adjusting the Tomcat server.xml certificates
Adjusting the certificates for Extension Designer - file ssl.config.js
Adding third party liblary for mySQL

# Certificates - you need to use SIGN serficates, not self-sign
"dockerDTP\_cert2026\yourPrivateKey.crt"
"dockerDTP\_cert2026\yourPrivateKey.key"

After you run the docker compose you should see DTP to add license, after that the connection with mySQL should be with success. 
Restart only the DTP conteiner. Done.
