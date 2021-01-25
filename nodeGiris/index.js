/* const fs = require('fs');

fs.copyFileSync("dosya1.txt", "dosya2.txt");

const EventEmitter = require('events');

const superheroes = require('superheroes');

var rastgeleKahraman = superheroes.random();
console.log(rastgeleKahraman); */

const bodyParser = require('body-parser')
const express = require('express');
const app = express();
app.use(bodyParser.urlencoded( {extended: true} ));
app.set('view engine', 'ejs');

// "/" anasayfayi resmeder
// req(requeiremend -> istek), res(responsle -> cevap).
app.get('/', function(req, res){
    res.sendFile( __dirname + "/index.html");
});

app.get("/iletisim", function(req, res){
    res.sendFile( __dirname + "/iletisim.html");
});

app.get("/giris", function(req, res){
    res.sendFile( __dirname + "/giris.html");
});


app.get("/profil", function(req, res){
    res.send("Su anda get yontemini kullaniyorsun");
});

app.post("/profil", function(req, res){
    //res.send("Normalde get'le gelemezdin, post'la gelebildin");
    if(req.body.kullaniciAdi == "Mustafa" && req.body.sifre == "1234" ){
        res.send(`Hosgeldin ${req.body.kullaniciAdi}`);
    }else{
        res.send("Hatali kullanici adi ve sifre");
    }
});


app.get("/yazi", function(req, res){
    var gonderilecekler = {
        baslik: 'Almanya hukumetinden aciklama',
        yorumSayisi: '30',
        yazar: 'Omer Hamza bey'
    };
    res.render('yazi', gonderilecekler);
})

// urun sayfasi için bir tane istek oluşturun. urun sayfasina bağlanmak isteyen kişi için
// urun.ejs dosyasını render edin ve urun sayfasında da ürünün başlığı ve yorumsayisi olsun.
app.get("/urun", function(req, res){
    var gonderilecekler = {
        baslik: 'Buzdolabi',
        yorumSayisi: '13'
    };
    res.render('urunSayfasi', gonderilecekler);
})

app.get("/book", function(req, res){
    var gonderilecekler = {
        yazar: 'Isaac Asimov',
        cevirmen: 'Ekin Odabas',
        yayinevi: 'Ithaki Yayincilik',
        fiyat: '11,70 TL',
        indirimliFiyat: '20,00 TL',
        indirimOrani: '-%41'
    };
    res.render('book', gonderilecekler);
})

app.get("*", function(req, res){
    res.send("Hatali giris!!! Lutfen sunucunuzu kontol ediniz.");
});




let port = process.env.PORT;
if(port == "" || port == null){
  port = 5000;
}
app.listen(port, function(){
  console.log("port : " + port);
});
