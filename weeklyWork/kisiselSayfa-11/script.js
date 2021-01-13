const { static } = require("express");
const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/folders"));


var kisiselSayfa = [
    {
        bolumAdi: "Hakkimda",
        index: 0
    },
    {
        bolumAdi: "Hobilerim",
        index: 1
    },
    {
        bolumAdi: "Bildigim Diller",
        index: 2
    }
];


app.get("/", function(req, res){

    res.render("index", {sayfa: kisiselSayfa});

});

app.get("/kisiselsayfa/:bolum/:index", function(req, res){

    var id = req.params.index;
    var bolum = kisiselSayfa[id].bolumAdi;

    res.render("hakkimda", { bolum: bolum} );

});

app.get("/kisiselsayfa/:bolum/:index", function(req, res){

    var id = req.params.index;
    var bolum = kisiselSayfa[id].bolumAdi;

    res.render("hobilerim", { bolum: bolum} );

});

app.get("/kisiselsayfa/:bolum/:index", function(req, res){

    var id = req.params.index;
    var bolum = kisiselSayfa[id].bolumAdi;

    res.render("bildigimdiller", { bolum: bolum} );

});







app.listen(8000);