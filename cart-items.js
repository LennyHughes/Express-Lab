const express = require('express');
const pool = require('./pg-connection-pool');

const cartItemRtr = express.Router();


cartItemRtr

    .get("/cart-items", (req,res)=>{
        res.setHeader("Content-Type", "application/json");
        res.setHeader('Access-Control-Allow-Origin', '*');

        const query = "SELECT id,product,price, quantity FROM ShoppingCart";

        pool.query(query).then((response) => {

            if(response.rows.length > 0){
                res.status(200).json(response.rows);
            }
            else {
                res.status(400).send();
            }
        }).catch(err => {
            console.log(err);
            res.status(400).send();
        })
    })
    .post("/cart-items", (req,res)=>{
        const postBody = req.body;

        res.setHeader("Content-Type", "application/json");
        res.setHeader('Access-Control-Allow-Origin', '*');

        const query = "INSERT INTO ShoppingCart (product,price, quantity) VALUES ($1, $2, $3)";

        pool.query(query, [postBody.product, postBody.price, postBody.quantity]).then(() => {
            res.status(201).json({
                product: postBody.product,
                price: postBody.price,
                quantity: postBody.quantity
            });
        }).catch( err => {
            console.log(err);
            res.status(500).send();
        })
    })
    .put("/cart-items/:product", (req,res)=>{

        const product = req.params.product;
        const putBody = req.body;

        res.setHeader("Content-Type", "application/json");
        res.setHeader('Access-Control-Allow-Origin', '*');

        const query = "UPDATE ShoppingCart set quantity=$1 WHERE product=$2";
        pool.query(query, [putBody.quantity, product]).then(() => {
            res.status(200).json({
                product:product,
                quantity:putBody.quantity
            });
        }).catch( err => {
            console.log(err);
            res.status(500).send();
        })
        
    })
    .delete("/cart-items/:id", (req,res)=>{
        const productId = req.params.id;
        
        res.setHeader("Content-Type", "application/json");
        res.setHeader('Access-Control-Allow-Origin', '*');
        
        const query = "DELETE from ShoppingCart WHERE ID = $1";

        pool.query(query, [productId]).then(() => {
            res.status(200).json('item removed');
        }).catch( err => {
            console.log(err);
            res.status(500).send();
        })
    })

    module.exports = cartItemRtr;