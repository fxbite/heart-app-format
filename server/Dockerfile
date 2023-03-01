FROM node:17
WORKDIR /app
COPY package.json .
RUN npm install --omit=dev
COPY . .
EXPOSE 2567
CMD ["node", "build/server.bundle.js"]