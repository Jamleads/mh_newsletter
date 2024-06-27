# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . /app

# Build the React application
RUN npm run build

# Expose the port that the application will listen on
EXPOSE 5173

# Set environment variables for Server URL
ENV SERVER_URL='https://newsletter.esdiacapp.com/api'

# Start the application
CMD ["npm", "run", "dev"]