const express = require('express');
const router = express.Router();

const CsvController = require('../controller/CsvController');

//router.post('/', CsvController.create);

router.get('/', CsvController.show);

module.exports = router;
