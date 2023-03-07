FROM node:16-alpine
WORKDIR /app
COPY package.json .
RUN npm install --omit=dev
RUN npm install pm2 -g
COPY . .
EXPOSE 2567
CMD ["pm2-runtime", "build/server.bundle.js"]