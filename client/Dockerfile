# Use an official Node.js runtime as a parent image
FROM node:18-alpine as builder

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application's source code
COPY . .

# Build the application
RUN npm run build

# Use an official Nginx image to serve the static files
FROM nginx:alpine

# Copy the build files from the builder stage
COPY --from=builder /usr/src/app/build /usr/share/nginx/html

# Expose port
EXPOSE 80
# Default command is to run nginx
