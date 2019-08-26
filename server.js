const port = 8888;
const express = require("express");
const cors = require('cors');
const cartItemRoutes = require('./cart-items');
const bodyParser = require('body-parser');

const app = express();

app
    .use(cors())
    .use(bodyParser.json())
    .use(cartItemRoutes)

app.listen(port, () => {
        console.log(`Server Running at port:${port}`);
    })