const mongoose = require('mongoose');

const healthCheck = {
    async database() {
        try {
            await mongoose.connection.db.admin().ping();
            return { status: 'healthy', timestamp: new Date() };
        } catch (error) {
            return { status: 'unhealthy', error: error.message };
        }
    },

    async service(serviceUrl) {
        try {
            const response = await fetch(`${serviceUrl}/health`);
            const data = await response.json();
            return { status: 'healthy', response: data };
        } catch (error) {
            return { status: 'unhealthy', error: error.message };
        }
    }
};

module.exports = healthCheck;
