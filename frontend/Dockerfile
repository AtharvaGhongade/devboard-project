FROM node:20-alpine AS build
WORKDIR /app
# Add this line — upgrades all stale Alpine packages including libcrypto3/libssl3
RUN apk update && apk upgrade --no-cache
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
# Add this line here too — stage 2 has its own separate Alpine layer
RUN apk update && apk upgrade --no-cache
RUN npm install -g vite@7 && npm cache clean --force
COPY --from=build /app/dist ./dist
COPY vite.preview.config.js ./vite.config.js
EXPOSE 4173
CMD ["vite", "preview", "--host", "0.0.0.0", "--port", "4173"]