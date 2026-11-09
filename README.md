# Parasoft DTP on Docker Desktop / WSL

This project demonstrates how to deploy **Parasoft DTP** using Docker Desktop, WSL Docker Engine, or a physical machine. 

*Note: This YAML configuration is intended as a demonstration for creating containers and services, not a comprehensive production guide.*

---

## Important Note on MachineID Stability

*   **Virtual Environments (Docker Desktop / WSL):** The `MachineID` is stabilized within this setup; restarting the container or Docker will not alter it. However, achieving a fully permanent and immutable `MachineID` requires a physical (non-virtualized) machine. See the `DTP` service and volume configuration for details.
*   **Physical Machines:** `MachineID` remains completely permanent and stable.

---

## Prerequisites & Pre-installation (WSL Only)

If this is a fresh Docker installation:
1. Download and install **Ubuntu (at least version 20.04)** in WSL.
2. Set this Ubuntu distribution as your default.
3. Restart the Docker Desktop application.

---

## Architecture Overview

### Global Network Configuration - the last option "networks:"
*   Manages internal IP addresses for container communication and service linking - global variables in "x-config:".
*   Acts as the mandatory backbone network for all deployed services.

### Services Description

*   **`config-automator`**  
    Automatically updates the `PSTRootConfig.xml` file with the correct IP addresses, which is critical for MySQL connectivity.
*   **`mySQL_8`**  
    Deploys the MySQL container and initializes the DTP database using the startup script located at `dockerMysql/create.sql`.
*   **`mongoDB`**  
    Required database backend for the DTP Extension Designer.
*   **`DTP`**  
    Manages the core Parasoft DTP application and associated files (defined in `dockerDTP/Dockerfile`). It handles:
    *   Configuring Tomcat `server.xml` certificates.
    *   Configuring Extension Designer certificates (`ssl.config.js`).
    *   Injecting third-party MySQL connector libraries.
      
---

## Deployment Steps

### 1. Clear Old Cache (Optional)
To ensure a clean build, clear old cached data by running:
```bash
sudo docker builder prune -a -f
```
### 2. Configuration & Certificates

### SSL Certificates
You must use **CA-signed certificates**, not self-signed ones. Place them in the following paths:
*   `dockerDTP_cert2026/yourPrivateKey.crt`
*   `dockerDTP_cert2026/yourPrivateKey.key`
      
### 3. Create Images and Containers (Mandatory)
Navigate to the folder containing your YAML file and choose **one** of the following options to deploy:

*   **Option 1: Standard Recreate (Recommended)**
    ```bash
    sudo docker compose -f composedtp2026.2_mySQL8.yaml up --build --force-recreate
    ```
*   **Option 2: Build from Scratch** (Use this if you ran the optional `prune` command above)
    ```bash
    sudo docker compose -f composedtp2026.2_mySQL8.yaml up --build
    ```
*   **Option 3: Legacy Docker Compose** (For older Docker versions)
    ```bash
    sudo docker-compose -f composedtp2026.2_mySQL8.yaml up --build --force-recreate
    ```
    
### Post-Deployment Checklist
1. Once `docker compose` finishes running, open the DTP web interface to add your license.
2. Verify that the connection to MySQL is successful.
3. **Restart only the DTP container** to finalize the setup. Done!

---
