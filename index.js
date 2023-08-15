const express = require("express");
const app = express();
const cors = require('cors');
const PORT = 3000;


app.use(cors());

// URL localhost:3000/

// GET /
app.get('/', function (req, res) {
    res.send('This is the Landing Page for the website')
});

// Controllers
app.use('/list', require('./controllers/list'))


app.listen(PORT, function () {
    console.log(`Server is running on Port ${PORT}`)
});