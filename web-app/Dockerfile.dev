FROM node:22.11-alpine3.19

WORKDIR /app

COPY package*.json .

RUN rm -rf node_modules
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]