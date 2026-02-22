# 1. Align with GitHub Actions using Node 22
FROM node:22-alpine
WORKDIR /usr/src/app

# 2. Install dependencies (using npm install to bypass lockfile error)
COPY package*.json ./
RUN npm install --omit=dev

# 3. Copy ALL your source code (app.js AND server.js)
# Your .dockerignore will safely keep out node_modules and tests
COPY . .

EXPOSE 3000

# 4. Start the app using server.js
CMD ["node", "server.js"]