const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mysql      = require('mysql');
const port = 5000;
const app = express();

app.set("view engine","ejs");
app.use(express.static(__dirname + '/public'));




var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '12344321',
  database : 'northwind'
});

connection.connect((err) => {
    if(err) throw err;
    console.log("SQL baglanti basarili");
});

function getCategories(callback) {

    let sql = "SELECT DISTINCT category FROM products";
    connection.query(sql, (err, results, fields) => {
        
        if(err) throw err;

        callback(results);
    });
}


function getFilterCategories(callback) {
    
    let sql = "SELECT DISTINCT category FROM products";

    connection.query(sql, (err, results, fields) => {
        
        if(err) throw err;

        callback(results);
    });
}


function getProducts(cagir) {

    let sql = "SELECT * FROM products";

    connection.query(sql, function (error, results, fields) {
        if (error) throw error;

        cagir(results);
      }); 
}


function stringFilter(array, callback) {
    
    let filterCat = [];

    for (let i = 0; i < array.length; i++) {
        
        let endArray = replace(array[i].category, [

            {
                pattern: / /g, 
                replace: ""
            },
            {
                pattern: /[^A-Za-z0-9]/g,
                replace: ""
            }
        ]);

        filterCat.push(endArray);
    }

    callback(filterCat);
}


app.get("/",(req,res) => {

    getProducts( function (results) {

        getCategories( function (results1) {

            stringFilter (results1, function (results2) {

                getFilterCategories( function (results3) {
                    
                    stringFilter( results3, function (results4) {

                        res.render("index", {
                            urunler: results,
                            kategoriler: results1,
                            kategoriFilter: results2,
                            allFilterCat: results4
                        
                        });             
                    });

                });
                
            });
            
        });
        
    });
    
    

});

app.get("/category",(req,res) => {
    res.render("category")
});

app.get("/product",(req,res) => {
    res.render("product")
});




app.listen(port);
