const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 8000;

app.set("view engine","ejs");
app.use(express.static(__dirname + '/public'));

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '12344321',
    database : 'pastahane'
  });

  connection.connect((err)=>{
    if (err) throw err;
    console.log("Bağlandı...");
  });



app.get("/",(req,res)=>{

    connection.query("SELECT * FROM urunler",(error,results,fields)=>{
        //console.log(results);
        res.render("index",{
            urunler : results
        })
    })
    
})



app.listen(port,()=>{
    console.log("Server Dinleniyor....");
});