FROM --platform=linux/amd64 docker.io/node:lts-alpine as builder
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build


FROM nginx
EXPOSE 3000
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder app/dist/news /usr/share/nginx/html