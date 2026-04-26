const app = require('./src/app');
const { connectDB } = require('./src/config/db');
const Retailer = require('./src/models/retailer.model');

const PORT = process.env.PORT || 3005;

const startServer = async () => {
  try {
    await connectDB();

    // Seed Initial Retailers if empty
    if (await Retailer.count() === 0) {
      await Retailer.bulkCreate([
        { name: 'VK Paints Central', city: 'Bangalore', email: 'central@vkpaints.com', lat: 12.9716, lng: 77.5946, address: 'MG Road, Bangalore' },
        { name: 'VK Paints Whitefield', city: 'Bangalore', email: 'whitefield@vkpaints.com', lat: 12.9698, lng: 77.7499, address: 'Whitefield, Bangalore' },
        { name: 'VK Paints South', city: 'Mumbai', email: 'south@vkpaints.com', lat: 18.9220, lng: 72.8347, address: 'Colaba, Mumbai' },
        { name: 'VK Paints NCR', city: 'Delhi', email: 'ncr@vkpaints.com', lat: 28.7041, lng: 77.1025, address: 'Connaught Place, Delhi' }
      ]);
      console.log('🏪 Initial retailers seeded.');
    }

    app.listen(PORT, () => {
      console.log(`🚀 Retailer Service running on port ${PORT}`);
    });
  } catch (err) {
    console.error('❌ Retailer Service startup failed:', err.message);
    setTimeout(startServer, 5000);
  }
};

startServer();
