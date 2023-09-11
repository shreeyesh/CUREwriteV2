FROM node:lts-alpine

WORKDIR /server

ENV PORT 8080

COPY package.json ./
RUN npm install

COPY . .

EXPOSE 8080
CMD ["npm", "start"]
