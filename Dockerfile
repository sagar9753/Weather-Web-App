# Use the official Node.js image as the base image
FROM node

# Set the working directory inside the container to /app
WORKDIR /app

# Copy the package.json file to the working directory
COPY package.json .

# Install all the dependencies listed in package.json
RUN npm install

# Copy all files from the current directory to the working directory in the container
COPY . .

# Expose port 3000 to allow external access to the application
EXPOSE 3000

# Set to start the application
CMD ["npm","start"]
