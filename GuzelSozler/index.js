const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));


app.use(bodyParser.urlencoded( {extended : true} ));
app.use(bodyParser.json());


var mongoDB = 'mongodb+srv://Mustafa:1234@cluster0.bicoz.mongodb.net/Mustafa?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});



// Define schema
const Schema = mongoose.Schema;

const guzelSozSema = new Schema(
    {
        kategori: String,
        icerik: String
    }
);

// Compile model from schema
const GuzelSoz = mongoose.model('GuzelSoz', guzelSozSema );


app.route("/api/guzelsoz/:id")
    .get(function (req, res) {
        GuzelSoz.findOne({_id : req.params.id}, function (err, gelenVeri) {
            if(!err){
                res.send(gelenVeri);
            } else{
                res.send(err);
            }
        })
    })
    .put(function (req, res) {
        let gelenKategori = req.body.kategori;
        let gelenIcerik = req.body.icerik;

        GuzelSoz.updateOne({_id : req.params.id}, {kategori : gelenKategori, icerik : gelenIcerik}, {overwrite: true}, function (err) {
            if(!err){
                res.send("Basariyla degistirildi");
            } else{
                res.send(err);
            }
        })
    })
    .patch(function (req, res) {
        GuzelSoz.updateOne({_id : req.params.id}, {$set : req.body}, function (err) {
            if(!err){
                res.send("Basariyla guncellendi");
            } else{
                res.send(err);
            }
        })
    })
    .delete(function (req, res) {
        GuzelSoz.deleteOne({_id : req.params.id}, function (err) {
            if(!err){
                res.send("Basariyla silindi");
            } else{
                res.send(err);
            }
        })
    });



app.route("/api/guzelsozler")    
    .get(function (req, res) {
        GuzelSoz.find({}, function (err, gelenVeriler) {
            if(!err){
                res.send(gelenVeriler);
            } else{
                res.send(err);
            }
        })
    })
    .post(function (req, res) {
        let guzelSoz = new GuzelSoz({
            kategori: req.body.kategori,
            icerik: req.body.icerik
          });
          guzelSoz.save((err) => {
              if(!err) {
                res.send("Basariyla olusturuldu");  
              } else{
                  res.send(err);
              }           
          }) 
    })
    .delete(function (req, res) {
        GuzelSoz.deleteMany({}, function (err) {
            if (!err) {
                res.send("Tum kayitlar basariyla silindi");
            } else{
                res.send(err);
            }
        })
    });



app.get("/", function (req, res) {
    
    GuzelSoz.find({}, function (err, gelenSozler) {
        res.render("anasayfa", {sozler: gelenSozler});
    });

});







app.listen(5000, () => {
    console.log("5000 portuna baglandik")
})