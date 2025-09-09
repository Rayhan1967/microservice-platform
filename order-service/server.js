const express = require('express');
const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());

app.get('/health', (req, res) => {
    res.json({
        status: 'Order Service is running',
        timestamp: new Date().toISOString(),
        service: 'order-service',
        version: '1.0.0'
    });
});

app.post('/api/orders', (req, res) => {
    res.json({ message: 'Create order endpoint', orderId: 'ORD-001' });
});

app.listen(PORT, () => {
    console.log(`Order Service running on port ${PORT}`);
});
