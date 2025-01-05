# Set Up a Virtualized Environment Using Docker


## **1. Create a Virtual Machine on GCP**
1. Create VM Instance with above configuration
   - OS: **Ubuntu 22.04 LTS**.
   - Enable **HTTP/HTTPS traffic**
2. Create Firewall rule for port 3000 by allowing ingress traffic.

---

## **2. SSH into the VM**
1. Go to **VM Instances**.
2. Click **SSH** to open the terminal.

---

## **3. Install Docker**
1. Update Packages and Install Docker:
   ```bash
   sudo apt update
   sudo apt install docker.io
   ```
2. Enable Docker service:
   ```bash
   sudo systemctl start docker
   sudo systemctl enable docker
   ```

---

## **4. Clone the Dockerfile and React App code from GitHub**
1. Clone the repository:
   ```bash
   git clone https://github.com/sagar9753/Weather-Web-App.git
   ```
2. Navigate to the project folder:
   ```bash
   cd Weather-Web-App
   ```
---

## **5. Build and Run Docker Container**
1. Build the Docker image:
   ```bash
   sudo docker build -t weather-image .
   ```
2. Run the container:
   ```bash
   sudo docker run -d --restart always -p 3000:3000 --name weather-container weather-image
   ```
3. Check images:
   ```bash
   sudo docker images
   ```
4. Check containers
   ```bash
   sudo docker ps -a
   ```
---

## **6. Access the Application**
1. Get the **External IP** of the VM from the GCP console.
2. Open a browser and visit:
   ```
   http://<External-IP>:3000
   ```
---
## **7. Stop and Start container**
1. Stop:
   ```bash
   sudo docker stop <container_name_or_id>
   ```
2. Start:
   ```bash
   sudo docker start <container_name_or_id>
   ```
---
## **8. Delete containers and images**
1. Delete Containers:
   ```bash
   sudo docker rm -f <container_name_or_id>
   ```
2. Delete images:
   ```bash
   sudo docker rmi <image_name_or_id>
   ```
---
