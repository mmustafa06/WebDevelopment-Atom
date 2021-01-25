const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const multer  = require('multer');
const port = 5000;
const app = express();

app.use(bodyParser.urlencoded( {extended: true} ));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/dosyalar"));
app.use(bodyParser.json());

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '12344321',
  database : 'blogsitesi'
});
 
connection.connect((err) => {
  if(err) throw err;

  console.log("sql baglandi");
});


let kategoriler = [];
let cokokunanlar = [];
let makaleler = [];

 
function getKategoriler(callback) {

  if( kategoriler.length > 0){
    callback(kategoriler);
  }else{
    connection.query('SELECT * FROM kategoriler', function (error, results, fields) {
      if (error) throw error;

      kategoriler = results;
      callback(results);
    });
  }

  
}


function cokOkunanlar(callback) {

  if (cokokunanlar.length > 0) {
    callback(cokokunanlar);
  } else{
    connection.query('SELECT * FROM makaleler ORDER BY okunmasayisi', function (error, results, fields) {
      if (error) throw error;
      
      cokokunanlar = results;
      callback(results);
    });
  }
}


function getMakaleler(callback) {

  if (makaleler.length > 0) {
    callback(makaleler);
  } else{
    connection.query('SELECT * FROM makaleler', function (error, results, fields) {
      if (error) throw error;
      
      makaleler = results;
      callback(results);
    });
  }
}


app.get("/", function (req, res) {

  getMakaleler( function (gelenMakaleler) {
    cokOkunanlar( function (gelenCokOkunanlar) {
      getKategoriler( function (gelenKategoriler) {

        res.render("anasayfa", {kategoriler : gelenKategoriler,
                                cokOkunanlar : gelenCokOkunanlar,
                                makaleler : gelenMakaleler});
      });
    });
  });
  
});


app.get("/makaleekle", function (req, res) {

  res.sendFile(__dirname + "/views/makaleekle.html");
});














app.listen(port);