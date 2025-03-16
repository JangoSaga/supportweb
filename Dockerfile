# Use official Node.js image as a base
FROM nginx:alpine
COPY dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
CMD ["sh", "-c", "envsubst '$$PORT' < /etc/nginx/conf.d/default.conf > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the React app
RUN npm run build

# Use Nginx to serve the built files
FROM nginx:alpine

# Copy built files from the previous step
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
