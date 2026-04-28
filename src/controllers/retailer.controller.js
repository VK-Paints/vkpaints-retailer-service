const Retailer = require('../models/retailer.model');

const getAllRetailers = async (req, res) => {
  try {
    res.json(await Retailer.findAll());
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createRetailer = async (req, res) => {
  try {
    const retailer = await Retailer.create(req.body);
    res.status(201).json(retailer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getNearestRetailer = async (req, res) => {
  try {
    const { lat, lng } = req.body;
    const retailers = await Retailer.findAll();
    
    if (retailers.length === 0) return res.status(404).json({ error: 'No retailers found' });
    
    let nearest = retailers[0];
    let minDistance = Math.sqrt(Math.pow(nearest.lat - lat, 2) + Math.pow(nearest.lng - lng, 2));

    for (let r of retailers) {
      const dist = Math.sqrt(Math.pow(r.lat - lat, 2) + Math.pow(r.lng - lng, 2));
      if (dist < minDistance) {
        minDistance = dist;
        nearest = r;
      }
    }
    
    res.json(nearest);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllRetailers,
  createRetailer,
  getNearestRetailer
};
