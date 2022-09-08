const Gelato = require('Gelato');

const env = require('dotenv');
env.config()

const User = require('./objects/user.js');

const app = new Gelato({
    name: "My new app",
    databaseURI: process.env.DB_CONNECTION,
    port: process.env.PORT,
    endpoints: [
        {
            name: 'User',
            object: User,
        }
    ]
});

module.exports = app.server
