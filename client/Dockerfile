# Builder
FROM node:16-alpine as builder
WORKDIR /app
COPY package.json .
RUN npm i --omit=dev 
COPY . .
RUN npm run build

# Production
FROM nginx:1.23.3-alpine
COPY --from=builder /app/build /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

