FROM node:20-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=production
COPY app.js ./
EXPOSE 3000
CMD ["node", "server.js"]