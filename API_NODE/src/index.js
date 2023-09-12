// import express from 'express';
// import mysql from 'mysql';
var express = require('express'); 
var mysql = require('mysql');

//configurações mysql //

const connection = mysql.createConnection({
    // host: 'mysql-container-instance',
    host: '172.17.0.2',
    user: 'root',
    password: 'databasesql',
    database: 'DATALAKE_SQL'
});

connection.connect();

// configurações node API express //

const app = express();

app.listen(9001, '0.0.0.0', function(){
    console.log("http://localhost:9001")
})

app.get('/', (req, res) => {
    res.send('hello world <br> Acesse ao <a href="http://localhost:9001/products">LINK<a/>')
  })

app.get('/products', function(req,res){
    connection.query(
        'SELECT * FROM products', 
        function(error, results){
            if (error){
                console.log("Erro ao carregar a query")
                res.send('Erro ao carregar a query')
                throw error
            };
            res.send(
                results.map(
                    item => ({
                    name: item.name,
                    price: item.price
                    })
                )
            )
        }
    )
})



