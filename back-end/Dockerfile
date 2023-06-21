FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY DigiCertGlobalRootCA.crt.pem /var/www/html/bin/DigiCertGlobalRootCA.crt.pem

EXPOSE 4000

CMD ["npm","start"];