const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mysql      = require('mysql');
const port = 8000;
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


function getProducts(cagir) {

    let sql = "SELECT * FROM northwind.products";

    connection.query(sql, function (error, results, fields) {
        if (error) throw error;

        cagir(results);
      });
    
}


app.get("/",(req,res) => {

    getProducts((tumUrunler) => {

        res.render("index", { urunler: tumUrunler})
        
    });
    
    

});

app.get("/category",(req,res) => {
    res.render("category")
});

app.get("/product",(req,res) => {
    res.render("product")
});




app.listen(port,() => {
    console.log("Port Listening....");
});
