# Step 1: Use the official Node.js image with your specific version (v20.15.1)
FROM node:20.15.1-alpine

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (if present)
COPY package.json package-lock.json* ./

# Step 4: Install development dependencies
RUN npm install

# Step 5: Copy the rest of the application code to the container
COPY . .

# Step 6: Expose port 3000 (default Next.js port)
EXPOSE 3000

# Step 7: Start the development server
CMD ["npm", "run", "dev", "--", "-H", "0.0.0.0"]

