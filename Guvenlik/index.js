require('dotenv').config();
const express    = require("express");
const bodyParser = require("body-parser");
const app        = express();
const mongoose   = require("mongoose");
const encrypt = require("mongoose-encryption");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/dosyalar"));
app.use(bodyParser.urlencoded( {extended: true} ));


mongoose.connect(process.env.mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

const Schema = mongoose.Schema;

const uyeSemasi = new mongoose.Schema({
  email: String,
  sifre: String
});

uyeSemasi.plugin(encrypt, {secret: process.env.SECRETKEY, encryptedFields: ['sifre']}); //encryptedFields sifrelenmek istenen alan

const Kullanici = new mongoose.model("Kullanici", uyeSemasi);


app.get("/", function(req, res){
  res.render("anasayfa");
});

app.get("/kayitol", function(req, res){
  res.render("kayitol");
});
app.post("/kayitol", function (req, res) {
  
  const uye = new Kullanici({
    email: req.body.username,
    sifre: req.body.password
  })

  uye.save(function (err) {
    if (err) {
      console.log(err);
    } else{
      res.render("gizlisayfa");
    }
  })
})

app.get("/giris", function(req, res){
  res.render("giris");
});


app.post("/girisyap", function (req, res) {

  const gelenEmail = req.body.username;
  const gelenSifre = req.body.password;

  Kullanici.findOne( {email: gelenEmail}, function (err, gelenVeri) {
    if (err) {
        console.log(err);
    } else{
      if (gelenVeri) {
        if (gelenVeri.sifre == gelenSifre) {
        res.render("gizlisayfa");
        } else{
          res.send("Sifre Hatali");
        }
      } else{
        res.send("Boyle bir kullanici yok")
      }
    }
  })
})





app.listen(5000, function(){
  console.log("5000 port'a bağlandık.");
})
