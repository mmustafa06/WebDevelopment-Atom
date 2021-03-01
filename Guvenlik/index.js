require('dotenv').config(); // Gizli dosyaarimizi env'de tutabilmek icin
const express    = require("express");
const bodyParser = require("body-parser");
const app        = express();
const mongoose   = require("mongoose");
//const encrypt = require("mongoose-encryption");
//const md5 = require('md5');
//const bcrypt = require('bcrypt');
//const saltRounds = 10; // Sifreye ekleme yapacagimiz karakter sayisi
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require('mongoose-findorcreate');


app.set("view engine", "ejs");
app.use(express.static(__dirname + "/dosyalar"));
app.use(bodyParser.urlencoded( {extended: true} ));
app.use(session({
  secret: 'Team4 - Web Developer',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());


mongoose.connect(process.env.mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set("useCreateIndex", true); // passport paketini Mongoose'da kullanabilmek icin izin verdik
const Schema = mongoose.Schema;

const uyeSemasi = new mongoose.Schema({
  email: String,
  sifre: String,
  googleId: String
});
uyeSemasi.plugin(passportLocalMongoose);
uyeSemasi.plugin(findOrCreate);

//uyeSemasi.plugin(encrypt, {secret: process.env.SECRETKEY, encryptedFields: ['sifre']}); //encryptedFields sifrelenmek istenen alan

const Kullanici = new mongoose.model("Kullanici", uyeSemasi);
passport.use(Kullanici.createStrategy());

// TARAYICIDA COOKIE OLUSTURACAGIZ
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

//TARAYICIDAN ALDIGIMIZ COOKIE'YI COZECEGIZ
passport.deserializeUser(function(id, done) {
  Kullanici.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile);
    Kullanici.findOrCreate({ googleId: profile.id }, function (err, user) { //Bul veya olusturu kullanmak icin paketini yukleriz
      return cb(err, user);
    });
  }
));


app.get("/", function(req, res){

  if (req.isAuthenticated()) {
    res.send("Sen giris yaptin masallah, saa header'i farkli daha ozel sayfa gosterecegim");
  } else {
    res.render("anasayfa");
  }
});

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/girisyap' }),
  function(req, res) {
    
    res.render("gizlisayfa")
  });


app.get("/kayitol", function(req, res){
  res.render("kayitol");
});


app.post("/kayitol", function (req, res) {

  Kullanici.register( {username: req.body.username, email: req.body.username}, req.body.password, function (err, gelenVeri) {
    if (err) {
      res.redirect("/kayitol")
    } else{
      passport.authenticate("local")(req, res, function () {
        res.render("gizlisayfa");
      })
    }
  });

  /*bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
    
    const uye = new Kullanici({
      email: req.body.username,
      sifre: hash
    })

    uye.save(function (err) {
      if (err) {
        console.log(err);
      } else{
        res.render("gizlisayfa");
      }
    })

  });*/
  
})

app.get("/giris", function(req, res){

  if (req.isAuthenticated()) {
    res.render("gizlisayfa");
  } else {
    res.render("giris")
  }
});


app.post("/girisyap", function (req, res) {

  let kullanici = new Kullanici({
    email: req.body.username,
    sifre: req.body.password
  })
  req.logIn(kullanici, function (err) {
    if (err) {
      console.log(err);
    } else {
      passport.authenticate("local")(req, res, function () {
        res.render("gizlisayfa")
      })
    }
  });

  /*const gelenEmail = req.body.username;
  const gelenSifre = req.body.password;

  Kullanici.findOne( {email: gelenEmail}, function (err, gelenVeri) {
    if (err) {
        console.log(err);
    } else{
      if (gelenVeri) {

        bcrypt.compare(gelenSifre, gelenVeri.sifre, function(err, result) {
            
            if (result) {
              res.render("gizlisayfa");
            } else{
              res.send("Sifre Hatali");
            }
        });

      } else{
        res.send("Boyle bir kullanici yok")
      }
    }
  })*/
})

app.get("/cikisyap", function (req, res) {
  req.logOut();
  res.redirect("/");
})



app.listen(5000, function(){
  console.log("5000 port'a bağlandık.");
})
