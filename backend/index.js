
const express = require("express");
var cors = require('cors');
const app = express();

const port = 5000;

app.use(cors());
app.use(express.json()); //middleware. compulsory

//Available Routes //if we go on /api/auth this point then we will get the info which providing in ./routes/auth.js location
// same for notes part
app.use('/solveCaptcha/', require('./routes/auth.js'));


app.get("/", (req, res) => {
    res.send("Hello to main page");
})


app.listen(port, () => {
    console.log("Listeninig to 5000 port......");
})

