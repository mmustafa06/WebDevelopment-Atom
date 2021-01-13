const bodyParser = require("body-parser");
const { query } = require("express");
const express = require("express");
const app = express();
app.use(bodyParser.urlencoded( {extended: true} ));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/folders"));

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '12344321',
  database : 'bilgiler'
});
 
connection.connect(function (err) {
  if(err) throw err;
  console.log("MySQL calisti");
});


 
connection.query('SELECT * FROM kitaplar', function (err, results, fields) {
  if (err) throw err;
  //console.log('The solution is: ', results[0]);
});
 
//connection.end();


var books = [
    {
        booksName: "Tutunamayanlar",
        author: "Oguz Atay",
        price: 35,
        imageAdress: "/images/tutunamayanlar.jpg",
        description: "Tutunamayanlar konusu itibariyle intihar eden arkadaşının geçmişini araştıran Turgut Özben’in, söz konusu arkadaşı Selim Işık’ın modern hayata neden “Tutunamadığı”nı öğrenme çabasını anlatmaktadır. Romanda Turgut’un karşılaştığı her kişi Selim Işık’ı tanıyan kişilerdir ve her biri Turgut’a Selim’in farklı yönlerini aktarmaktadır.", 
        id: 0,
        kategori : "Roman",
        yayinevi : "Yulva Muhurcişi"
    },
    {
        booksName: "Korluk",
        author: "Jose Saramago",
        price: 27,
        imageAdress: "/images/korluk.jpg",
        description: "Distopik eserlere ilgi duyanların elinden düşürmediği Körlük, yayınlandığı günden bu yana adından söz ettirmeye devam ediyor. Portekiz’li yazar José Saramago’ya 1998’de Nobel Edebiyat Ödülü’nü kazandıran eser, konusuyla olduğu kadar zekice kurgulanmış karakterleriyle de dikkat çekiyor. Dönemin liberal demokrasi anlayışına bir eleştiri mahiyetinde kaleme alınan roman, insanların gittikçe bencilleşip olaylar karşısında duyarsızlaşmasını bir körlük metaforu etrafında işliyor.", 
        id: 1,
        kategori : "Roman",
        yayinevi : "Jose Saramago"
    },
    {
        booksName: "Seker Portakali",
        author: "Jose Mauro De Vasconcelos",
        price: 17,
        imageAdress: "/images/sekerportakali.jpg",
        description: "Acı dolu bir hayat sürdürmek ve bunu yaşamın olağan seyri gibi kabul etmek, ta ki hayattaki en gerçek ve karşı konulamaz acının ne olduğunu öğrenene kadar… Şeker Portakalı; yoksulluk ve sevgisizlik içinde yaşayan küçük Zeze’nin dünyasını, okuyucusuna yalnızca minik bir çocuğun gözünden değil, evrensel bir hakikat penceresinden sunuyor.", 
        id: 2,
        kategori : "Roman",
        yayinevi : "Can Çocuk"
    },
    {
        booksName : "Altıncı Koğuş",
        price : 35,
        id : 3,
        imageAdress : "/images/altincikogus.jpg",
        yayinevi : "Yulva Muhurcişi",
        description : "Çehov bir taşra kasabasındaki akıl hastanesinde geçen bu novellasında, eğitimli bir hasta olan İvan Dmitriç ile Doktor Andrey Yefimıç arasındaki felsefi çatışmaya odaklanır. İvan Dmitriç maruz kaldıkları adaletsizliğe, içinde yaşamaya zorlandıkları berbat koşullara karşı çıkarken, Andrey Yefimıç bunları görmezden gelmekte ısrar eder ve durumu değiştirmek için kılını bile kıpırdatmaz. Doktor sonunda içine düştüğü “felsefi” yanılgının farkına vardığında ise artık iş işten geçmiştir. Altıncı Koğuş, Rusya’nın ve ülkenin sorunlarıyla ilgilenmek yerine onları uzaktan izlemeyi tercih eden elit Rus aydınının “deliliği”nin simgesidir adeta. Altıncı Koğuş, Russkaya Mısl dergisinin 1892 kasım sayısında yayımlandığında büyük ilgi görmüştü. Hatta Lenin’in de yapıtı okuduktan sonra dehşete kapıldığı, “Kendimi Altıncı Koğuş’a kapatılmış gibi hissettim” dediği rivayet edilir. ",
        author : "Anton Pavloviç Çehov",
        kategori : "Roman"
      },
      {
        booksName : "Hayvan Çiftliği",
        price : 35,
        id : 4,
        imageAdress : "/images/hayvanciftligi.jpg",
        yayinevi : "Celal Üster",
        description : "Distopik romanlarıyla ünlenen İngiliz Yazar George Orwell tarafından 1945 yılında yayımlanan Hayvan Çiftliği adlı roman, masalsı atmosferinin altında derin bir sistem eleştirisi barındırıyor. Fabl türünde kaleme alınan eser, yazarın 1984 adlı romanıyla birlikte en geniş kitlelere ulaşan yapıtları arasında yer alıyor. Ön yüzünde bir çiftlik ve içinde yaşayan hayvanları konu edinen roman; devletleri, yönetim biçimlerini ve toplumları sembolik olduğu kadar sade bir anlatımla ele alıyor.Orwell’in çağdaş klasikler arasında değerlendirilen Hayvan Çiftliği romanı, dünya edebiyatının en dikkat çekici hiciv romanları arasında bulunuyor. Romanının alt metninde birden fazla yönetimin olumsuz yönüne yer veren yazar, ana temasını sosyalizm eleştirisi üzerine kuruyor. Orwell, ideoloji bakımından kendisi de sosyalizme eğilimli olmasının yanı sıra romanında totaliter yönetime meydan okuyor.",
        author : "George Orwell",
        kategori : "Roman"
      },
      {
        booksName : "Sefiller" ,
        price: 20 ,
        id : 5  ,
        imageAdress :  "/images/sefiller.jpg",
        yayinevi : "Papatya",
        description : "İlk olarak 1862'de yayınlandı. 19. yüzyılın en büyük eserlerinden biri olarak kabul gördü. Hikâye 1815'te başlar ve 1832'deki Paris Haziran Ayaklanması'nda son bulur. Birkaç karakterin yaşamını ve birbirleriyle alakasını ele alan roman daha çok eski mahkûm Jean Valjean'ın yaşam mücadelesi ve kefaretini ödemeye çalışmasına odaklanır.Yasa ve merhametin doğasının incelendiği roman ayrıca Fransa tarihi, Paris'in mimarisi ve kentsel tasarımı, siyaset, ahlak felsefesi, antimonarşizm, adalet, din, ailevi ve romantik sevginin türleri ve doğası gibi konuları özenle ele alır.",
        author : "Victor Hugo",
        kategori : "Roman"
      },
      {
        booksName : "Suç ve Ceza" ,
        price: 50,
        id : 6,
        imageAdress :  "/images/sucveceza.jpg",
        yayinevi : "Karbon",
        description : "Dostoyevski (1821-1881): Gerek 1840 ortalarından itibaren yayımlamaya başladığı Beyaz Geceler ve Öteki gibi uzun öykü-kısa romanlarıyla, gerekse ilkini elinizde tuttuğunuz Suç ve Ceza, Budala ve Karamazov Kardeşler gibi Sibirya sürgünü sonrası büyük romanlarıyla Dostoyevski, insanın karanlık yakasını kendinden sonraki bütün romancıları derinden etkileyecek biçimde dile getirmiş büyük bir 19. yüzyıl ustasıdır. Mazlum Beyhan (1944); Yayımlamış olduğu Dostoyevski’den Suç ve Ceza ve Budala, Tolstoy’dan Çocukluğum, İlkgençliğim, Gençliğim ve Gogol’dan Arabeskler benzeri çalışmalar düşünüldüğünde, Beyhan, hiç tartışmasız son 35 yılın en önemli Rus edebiyatı çevirmenlerinden biridir.",
        author : "Dostoyevski",
        kategori : "Roman"
      },
      {
        booksName : "Tehlikeli Oyunlar" ,
        price: 30,
        id: 7,
        imageAdress : "/images/tehlikelioyunlar.jpg",
        yayinevi : "İş Bank",
        description : "Türkiye'de postmodern edebiyatın en \"güçlü\" temsilcisi olarak görülen Oğuz Atay, Tehlikeli Oyunlar romanıyla günümüzde de sıkça konuşulmaya devam ediyor. Yazarın Tutunamayanlar’dan sonra ikinci eseri olarak kaleme aldığı Tehlikeli Oyunlar, bireyin toplum ve kendisi ile olan sorunlarını ele alıyor. Başkahramanın kişiliği bakımından Tutunamayanlar ile aynı düzlemde ilerleyen roman, bu yönüyle Atay’ın “anlaşılamama” kaygısını yeniden ve güçlü bir şekilde vurguluyor. Postmodernist Edebiyatın Güçlü Bir Temsili Okurlarıyla ilk olarak 1973 yılında buluşan Tehlikeli Oyunlar, Atay’ın Türk edebiyatındaki sınırları ikinci kez yıkması bakımından büyük bir önem taşıyor. Postmodernist roman akımının Türkiye’deki artçı gücü olan eser, kendisinden sonra verilecek pek çok başarılı eserin de ilham kaynağını oluşturuyor. Tehlikeli Oyunlar’da, postmodernist roman akımının dünyadaki öncüleri sayılan James Joyce ve Vladimir Nabokov gibi güçlü yazarların etkisi de hissediliyor.",
        author : "Oğuz Atay",
        kategori : "Roman"
      },
      {
        booksName : "Serenad",
        price: 50,
        id : 8,
        imageAdress : "/images/serenad.jpg",
        yayinevi : "Doğan Kitap",
        description: "Her şey, 2001 yılının Şubat ayında soğuk bir gün, İstanbul Üniversitesi'nde halkla ilişkiler görevini yürüten Maya Duran'ın (36) ABD'den gelen Alman asıllı Profesör Maximilian Wagner'i (87) karşılamasıyla başlar. 1930'lu yıllarda İstanbul Üniversitesi'nde hocalık yapmış olan profesörün isteği üzerine, Maya bir gün onu Şile'ye götürür. Böylece, katları yavaş yavaş açılan dokunaklı bir aşk hikâyesine karışmakla kalmaz, dünya tarihine ve kendi ailesine ilişkin birtakım sırları da öğrenir. Serenad, 60 yıldır süren bir aşkı ele alırken, ister herkesin bildiği Yahudi Soykırımı olsun isterse çok az kimsenin bildiği Mavi Alay, bütün siyasi sorunlarda asıl harcananın, gürültüye gidenin hep insan olduğu gerçeğini de göz önüne seriyor. Okurunu sımsıkı kavrayan Serenad'da Zülfü Livaneli'nin romancılığının en temel niteliklerinden biri yine başrolde: İç içe geçmiş, kaynaşmış kişisel ve toplumsal tarihlerin kusursuz Dengesi.",
        author : "Zülfü Livaneli",
        kategori : "Roman"
      },
      {
        booksName : "Simyacı",
        price : 35,
        id : 9,
        imageAdress : "/images/simyaci.jpg",
        yayinevi : "Özdemir",
        description : "Dünya edebiyatının fenomenleri arasında yer alan Simyacı, yayımlandığı günden bugüne pek çok hayata dokunmaya devam ediyor. Brezilyalı yazar Paulo Coelho tarafından 1988 yılında yayımlanan eser, Doğu ve Batı dünyasına aynı pencereden ışık tutuyor. Coelho’nun Mesnevi’deki bir kıssadan hareketle kaleme aldığı Simyacı, macera dolu öyküsü ve felsefi yönüyle başucu kitabınız olmaya aday! Etkileyici hikayesi, sade anlatımı ve derinliğiyle Simyacı, dünya klasiklerinin en sevilen eserlerinden biri. Yayımlandıktan kısa süre sonra 42 ülkede basılan ve 26 dile çevrilen eser, 1996’dan günümüze Türkiye’de de en çok okunan romanlar arasındaki yerini koruyor. Eğer hem bir macera tutkunu hem de felsefe meraklısıysanız Simyacı, sizi de etkisi altına alacak. Simyacı, Santiago adındaki Endülüslü bir çobanın İspanya’dan başlayıp Mısır’da sona eren yolculuğunu konu ediniyor.",
        author : "Paulo Chello",
        kategori : "Roman"
      }
];

app.get("/", function(req, res){

  connection.query("SELECT * FROM kitaplar", function (err, results, fields) {
    if(err) throw err;

    var veriTabaniKitaplar = results; 
    //console.log(veriTabaniKitaplar);
    res.render("index", {books: veriTabaniKitaplar});
  })
});

app.get("/books/:name/:id", function(req, res){
  var idNumber = req.params.id;

  connection.query("SELECT * FROM kitaplar WHERE id = "+ idNumber, function (err, results, fields) {
    if(err) throw err;

    var book = results[0].kitapismi;
    var author = results[0].yazar;
    var price = results[0].fiyat;
    var image = results[0].resimlinki;
    var description = results[0].aciklama;
    var kategori = results[0].kategori;
    var yayinevi = results[0].yayinevi;

    res.render("books", {   name: book,
                            author: author,
                            price: price,
                            image: image,
                            description: description,
                            id: idNumber,
                            kategori: kategori,
                            yayinevi: yayinevi,
                            books: []
    });

  });   
});


app.get("/kategori/:kategorilink", function(req, res){

  res.render("kategori", {books: books});

});


app.get("/arama", function(req, res){

  let aranan = req.query.kitap;
  res.send("arama sayfasi: "+aranan);

});

app.get("/kitapekle", function(req, res){

  res.sendFile(__dirname + "/views/kitapekle.html");

});

app.post("/veritabanina-ekle", function(req, res){

  let gelenVeriler = req.body.kitapismi;
  res.redirect("/kitapekle");

})



app.listen(8000);