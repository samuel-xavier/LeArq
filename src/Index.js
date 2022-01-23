require("dotenv").config();

const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors());
server.use(express.json());

const CsvRoutes = require('./routes/CsvRoutes');
server.use('/csv', CsvRoutes);

server.listen(3000, function(){
    console.log('Api executando na porta 3000!')
});