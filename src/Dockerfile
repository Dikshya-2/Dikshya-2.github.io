FROM node:20-alpine as angular
# Set the working directory
WORKDIR /app

# Copy all application files
COPY . .
#This will install angular project
RUN npm install

# Build the Angular application
RUN npm install -g @angular/cli

RUN ng build --output-path=docs --base-href
# Stage 2 - Serve the application using Nginx
FROM nginx:alpine

COPY --from=angular /app/docs/browser /usr/share/nginx/html
# Expose port 80
EXPOSE 80 
# Start Nginx
CMD ["nginx", "-g", "daemon off;"]