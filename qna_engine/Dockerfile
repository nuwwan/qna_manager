# Base image
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

# Expose the port the app runs on
EXPOSE 8003

# Start the app
CMD ["npm", "start"]