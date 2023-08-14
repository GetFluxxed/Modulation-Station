const express = require("express");
const app = express();
const PORT = 3000;


// GET /
app.get('/', function (req, res) {
    res.send('home page')
});
// URL localhost:3000/
// GET /pick


app.listen(PORT, function () {
    console.log(`Server is running on Port ${PORT}`)
});