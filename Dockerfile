# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the rest of the app files to the container
COPY . .

# Set the command to start the app
CMD [ "npm", "start" ]

# Expose the port on which the app will run
EXPOSE 3000
