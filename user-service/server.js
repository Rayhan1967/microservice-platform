const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get('/health', (req, res) => {
    res.json({
        status: 'User Service is running',
        timestamp: new Date().toISOString(),
        service: 'user-service',
        version: '1.0.0'
    });
});

app.post('/api/users/register', (req, res) => {
    res.json({ message: 'User registration endpoint' });
});

app.post('/api/users/login', (req, res) => {
    res.json({ message: 'User login endpoint' });
});

app.listen(PORT, () => {
    console.log(`User Service running on port ${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/health`);
});
