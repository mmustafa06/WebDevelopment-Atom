const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mysql = require("mysql");
//const async = require("async");
//var replaceall = require("replaceall");
var replace = require("batch-replace");
const port = 5000;
const app = express();
​
app.set("view engine","ejs");
app.use(express.static(__dirname + '/public'));
​
​
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '12344321',
    database : 'northwind'
  });
​
  connection.connect((error) => {
      if(error) { throw error}
      console.log("Bağlantı Başarılı");
  });
​
​
  function getCategories(callback) {
      
    let sorgu = 'SELECT DISTINCT category FROM products';
    connection.query(sorgu,(error,results,fields) => {
        if (error) {throw error}
        callback(results);
    }); 
  }
​
​
  function getFilterCategories(callback) {
      
    let sorgu = 'SELECT category FROM products';
    connection.query(sorgu,(error,results,fields) => {
        if (error) {throw error}
        callback(results);
    }); 
  }
​
​
​
  function getProducts(callback) {
​
    let sorgu = 'SELECT * FROM products';
​
    connection.query(sorgu, function (error, results, fields) {
        if (error) throw error;
        callback(results); 
      });
      
  }
​
  function stringFilter(dizi,callback) {
    let filterCat = [];
​
    for (let i = 0; i < dizi.length; i++) {
        
        
        let son =  replace(dizi[i].category, [
            {
                pattern: / /g,
                replace: ""
            },
            {
                pattern: /[^A-Za-z0-9]/g,
                replace: ""
            }
            // {
            //     pattern: /(\b[A-Z]['A-Z]+|\b[A-Z]\b)/g,
            //     replace: /(\b[a-z][a-z]+|\b[a-z]\b)/g
            // }
        ]);
        filterCat.push(son);
    }
    callback(filterCat);
  }
​
  
​
​
app.get("/",(req,res) => {
​
    getProducts((results) => {      // Bütün ürünler ve fieldları geldi
​
        getCategories((results1) => {  //Kategoriler geliyor boşluklu ve özel karakter barındırır şekilde ve her kategoriden tek olcak şekilde (DISTINC)
​
            stringFilter(results1,(results2) => { //results 1 değerleri gönderildi filtre işleminden sonra results 2 olarak geri döndü
                
                //console.log(results2);
​
                getFilterCategories((results3) => {     //TÜM ÜRÜNLERİN KATEGORİLERİNİ RESULTS 3 İLE GETİRİR DISTINC OLMADAN
                
                    stringFilter(results3,(results4) => {   //results 3 değerleri gönderildi filtre işleminden sonra results 4 olarak geri döndü
                        //console.log(results4);
                        res.render("index",{
                            urunler : results,
                            kategoriler : results1,
                            kategorilerFilter : results2,
                            allFilterCat : results4
                        }) 
                    })
                    
    
                })
            })
​
            
​
            //console.log(filterCat);
            
            
        })
        //console.log(results);
    });
});
​
app.get("/category",(req,res) => {
    res.render("category")
});
​
app.get("/product",(req,res) => {
    res.render("product")
});
​
​
​
​
app.listen(port,() => {
    console.log("Port Listening....");
});