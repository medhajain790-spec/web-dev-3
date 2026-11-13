const express = require('express');

const doctorRoutes = require('./routes/doctors.routes.js');
const dotenv = require('dotenv');
dotenv.config();
const ConnectDB= require("./config/db.js")
const app = express();
const port = 3000;


app.use(express.json())
app.use('/', doctorRoutes);


ConnectDB();

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
})