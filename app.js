'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
app.get('/', (req, res) => {
    res.send('Hello world!\n')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
# Mengambil base image dari node
FROM node:8
 
# Membuat direktori aplikasi pada container
WORKDIR /app
 
# Memindahkan dependency aplikasi ke working directory
COPY package*.json ./
 
# Menginstall dependency
RUN npm install
 
# Memindahkan seluruh berkas ke dalam direktori container
COPY . .
 
# Mengatur container untuk membuka dan menggunakan port 8000
EXPOSE 8000
 
# Perintah untuk menjalankan aplikasi
CMD [ "npm", "start" ]
