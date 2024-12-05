

# Step 1: Use an official Node.js image as a base image
FROM node:18-alpine

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json first (this helps in caching layers)
COPY package*.json ./

# Step 4: Install dependencies inside the container
RUN npm install

# Step 5: Copy the rest of the application files to the container
COPY . .

# Step 6: Expose port 3000 for the application
EXPOSE 5173

# Step 7: Run the application using the 'npm start' command
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
