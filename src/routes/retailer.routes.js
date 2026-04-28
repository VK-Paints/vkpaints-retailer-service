const express = require('express');
const router = express.Router();
const retailerController = require('../controllers/retailer.controller');

router.get('/', retailerController.getAllRetailers);
router.post('/', retailerController.createRetailer);
router.post('/nearest', retailerController.getNearestRetailer);

module.exports = router;
