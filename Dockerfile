FROM node:18.12.1-buster-slim AS nodejs

WORKDIR /app
COPY package.json package-lock.json ./

COPY build/ build/




FROM nginx:1.23.2-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=nodejs app/build /usr/share/nginx/html
RUN touch /var/run/nginx.pid
RUN chown -R nginx:nginx /var/run/nginx.pid /usr/share/nginx/html /var/cache/nginx /var/log/nginx /etc/nginx/conf.d
USER nginx
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]