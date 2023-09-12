// import express from 'express';
// import mysql from 'mysql';
var express = require('express'); 
var mysql = require('mysql');

//configurações mysql //

const connection = mysql.createConnection({
    host: '172.17.0.2',
    user: 'root',
    password: 'databasesql',
    database: 'DATALAKE_SQL'
});

connection.connect();

// configurações node API express //

const app = express();

app.listen(9001, '0.0.0.0', chamadaInitial())

app.get('/', (req, res) => {
    res.send('hello world')
  })

app.get('/products', function(req,res){
    connection.query(
        'SELECT * FROM products', 
        function(error, results){
            if (error){
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


function chamadaInitial(){
    console.log("Escutando a porta 9001")
}

