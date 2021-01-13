const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mysql = require('mysql');
const port = 8000;

const app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));


var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '12344321',
    database : 'todo-list'
  });
   
  connection.connect((err) => {
      if(err) throw err;
  });

  function getAllTodo(callback) {

    let sql = "SELECT * FROM todo";

    connection.query(sql, function (err, results, fields) {

      if(err) throw err;

      callback(results);
    })
  }


  function addTodo(newTodo, callback) {

    let sqlInput = `INSERT INTO todo (todo_name) VALUES ('${newTodo}')`;

    connection.query(sqlInput, function (err, results, fields) {

      if(err) throw err;

      callback(results); 
    })
  }


  app.post("/ekle", (req, res) => {
    
    let girilenTodo = req.body.todo;
    
    addTodo (girilenTodo, (gelenDeger) => {

      res.redirect("/");
      
    }) 

  })
   



app.get('/', (req, res) => {

  getAllTodo(function (veriTabaniList) {

    let results = veriTabaniList;

    res.render("index", {todoList: results}); 
  })
   
}); 












  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });