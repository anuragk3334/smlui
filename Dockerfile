# Step 1: Use Node.js 14.15.0 to build the Angular application
FROM node:14.15.0 AS build-stage

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the Angular app's source code into the container
COPY . .

# Build the Angular app for production
RUN npm run build --prod

# Step 2: Use an nginx image to serve the Angular application
FROM nginx:stable-alpine AS production-stage

# Copy the built Angular app from the previous stage to nginx's default directory
COPY --from=build-stage /app/dist/my-angular-app /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
