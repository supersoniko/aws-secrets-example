require('dotenv').config()

const express = require('express')

const app = express();
const router = express.Router();

router.get('/hello', (req, res) => res.send(`My dirty little secret is ${process.env.MY_SECRET}`));

// The aws-serverless-express library creates a server and listens on a Unix
app.use('/', router)

module.exports = app
