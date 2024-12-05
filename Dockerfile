FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

EXPOSE 3000

COPY . .

RUN ls -of
CMD ["npm", "start"]
# CMD node index.js
