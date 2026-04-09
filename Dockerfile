FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

# install bersih & aman
RUN npm ci

COPY . .

# FIX permission vite
RUN chmod +x node_modules/.bin/vite

RUN npm run build


FROM nginx:stable-alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]