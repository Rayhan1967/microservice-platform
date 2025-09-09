const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

app.get('/health', (req, res) => {
    res.json({
        status: 'Product Service is running',
        timestamp: new Date().toISOString(),
        service: 'product-service',
        version: '1.0.0'
    });
});

app.get('/api/products', (req, res) => {
    res.json({ message: 'Product list endpoint', products: [] });
});

app.listen(PORT, () => {
    console.log(`Product Service running on port ${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/health`);
});
