const express = require('express');
const cartItemRtr = express.Router();
const bodyParser = require('body-parser');

const cartItems = [
    {
        id:"1",
        product:"Natural Deodorant",
        price:"10.99",
        quantity: "20"
    },
    {
        id:"2",
        product:"Almond Milk Shampoo",
        price:"17.99",
        quantity: "5"
    },
    {
        id:"3",
        product:"Organic Toothpaste",
        price:"11.99",
        quantity: "8"
    },
    {
        id:"4",
        product:"Earth Face Scrub",
        price:"19.99",
        quantity: "25"
    }
];

cartItemRtr.use(bodyParser.json());

cartItemRtr

    .get("/cart-items", (req,res)=>{
        res.setHeader("Content-Type", "application/json");
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json(cartItems);
        res.end();
    })
    .post("/cart-items", (req,res)=>{
        res.setHeader("Content-Type", "application/json");
        res.setHeader('Access-Control-Allow-Origin', '*');
        console.log(req.body);
        res.send("post");
        res.end();
    })
    .put("/cart-items/:id", (req,res)=>{
        res.setHeader("Content-Type", "application/json");
        res.setHeader('Access-Control-Allow-Origin', '*');
        console.log(req.body);
        console.log(req.params.id);
        res.send("put");
        res.end();
    })
    .delete("/cart-items/:id", (req,res)=>{
        res.setHeader("Content-Type", "application/json");
        res.setHeader('Access-Control-Allow-Origin', '*');
        console.log(req.params.id);
        res.send("delete");
        res.end();
    })

    module.exports = cartItemRtr;