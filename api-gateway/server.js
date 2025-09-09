const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Health endpoint
app.get('/health', (req, res) => {
    res.json({
        status: 'API Gateway is running',
        timestamp: new Date().toISOString(),
        service: 'api-gateway',
        version: '1.0.0',
        services: {
            userService: process.env.USER_SERVICE_URL || 'http://user-service:3001',
            productService: process.env.PRODUCT_SERVICE_URL || 'http://product-service:3002',
            orderService: process.env.ORDER_SERVICE_URL || 'http://order-service:3003'
        }
    });
});

// Service proxies
app.use('/api/users', createProxyMiddleware({
    target: process.env.USER_SERVICE_URL || 'http://user-service:3001',
    changeOrigin: true
}));

app.use('/api/products', createProxyMiddleware({
    target: process.env.PRODUCT_SERVICE_URL || 'http://product-service:3002',
    changeOrigin: true
}));

app.use('/api/orders', createProxyMiddleware({
    target: process.env.ORDER_SERVICE_URL || 'http://order-service:3003',
    changeOrigin: true
}));

app.listen(PORT, () => {
    console.log(`🚀 API Gateway running on port ${PORT}`);
});
