# Step 1: Use an official Node.js image as the base image
FROM node:18

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json (or yarn.lock) into the container
COPY package*.json ./

# Step 4: Install dependencies in the container
RUN npm install

# Step 5: Copy the rest of the application files into the container
COPY . .

# Step 6: Expose the port that Next.js will run on (default is 3000)
EXPOSE 4000
EXPOSE 2022

# Step 7: Run the Next.js application in development mode
CMD npm run dev & npx novu@latest dev
