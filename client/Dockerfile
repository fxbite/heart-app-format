# Builder
FROM node:16-alpine as builder
WORKDIR /app
COPY package.json .
RUN npm i --omit=dev 
COPY . .
RUN npm run build

# Production
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

