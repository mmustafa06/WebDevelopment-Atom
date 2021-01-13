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
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

/*
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/dosyalar/resimler')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  });
   
  var upload = multer({ storage: storage })

 
app.post('/profile', upload.none(), function (req, res, next) {
  // req.body contains the text fields
});

*/

app.get("/", function (req, res) {
  
  res.render("anasayfa");

});

















app.listen(port);