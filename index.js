const express = require('express');
const authenticate = require('./AuthenticateHelper');
const bodyPareser = require('body-parser');
const app = express();

app.use(bodyPareser());
app.post('/authenticate', (req, res) => {
    const token =  authenticate(req.body);
    res.status(200).json({"token": token})
})

app.listen(8080);

module.exports = app;