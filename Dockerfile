# Stage 1: Build the React app
# Runs on the build machine's own architecture: the output is static files, and
# vite 8's native bundler (rolldown) has no 32-bit ARM binary for Alpine.
FROM --platform=$BUILDPLATFORM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY index.html ./
COPY vite.config.js ./
COPY prerender.js ./
COPY eslint.config.js ./
COPY public/ ./public/
COPY src/ ./src/

RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
