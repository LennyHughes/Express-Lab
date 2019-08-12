const port = 8888;
const express = require("express");
const cartItemRoutes = require('./cart-items');

const app = express();

app.use(cartItemRoutes);

app.listen(port, () => {
        console.log(`Server Running at port:${port}`);
    })