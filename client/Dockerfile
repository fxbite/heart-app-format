FROM node:16-alpine 
WORKDIR /app

# Copy build folder, package.json
COPY package.json .
RUN npm i --omit=dev 
RUN npm i -g serve
COPY . .
ENV NODE_ENV production
EXPOSE 4000
CMD serve -s build -l 4000