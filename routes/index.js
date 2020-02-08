const express = require('express');

const { fizzBuzz } = require('../controllers/fizzBuzz');

const router = express.Router();

// sub route to test
router.get('/fizBuzz', fizzBuzz);

module.exports = router;
