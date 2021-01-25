
let storeItems = document.getElementsByClassName("store-item");
let allItemsBtn = document.getElementById("all");
let cakesBtn = document.getElementById("cakes");
let cupcakesBtn = document.getElementById("cupcakes");
let sweetsBtn = document.getElementById("sweets");
let doughnutsBtn = document.getElementById("doughnuts");
let searchInput = document.getElementById("search-item");
let cardContent = document.querySelectorAll("#store-item-name");
let allCard = document.getElementById("store-items");
let itemCount = document.getElementById("item-count"); // sepet kısmındaki toplam ürün sayısı elementi
let itemTotal = document.getElementById("item-total"); // sepet kısmındaki toplam ürün fiyatı elementi
let cardOutside = document.getElementById("cart-content"); // sepet in içerik kısmı
let addToCardAlert = document.getElementById("addToCardAlert");

//let addToCardBtn = document.querySelectorAll(".store-item-icon");

//console.log(addToCardBtn)

//console.log(cardContent);
/* Event Listeners */

allItemsBtn.addEventListener("click",(e)=>{
    getAllData();
    e.preventDefault();
});
cakesBtn.addEventListener("click",(e)=>{
    dataFilter("cakes");
    e.preventDefault();
});
cupcakesBtn.addEventListener("click",(e)=>{
    dataFilter("cupcakes");
    e.preventDefault();
});
sweetsBtn.addEventListener("click",(e)=>{
    dataFilter("sweets");
    e.preventDefault();
});
doughnutsBtn.addEventListener("click",(e)=>{
    dataFilter("dougnuts");
    e.preventDefault();
});
searchInput.addEventListener("keyup",()=>{
    getAllData();
    getSearch();
    //console.log(e.key);
});

// function(){

// }

allCard.addEventListener("click",(e)=>{

    //console.log(e.target);

    let prodImg,prodName,prodPrice;

    if ( e.target.className == "store-item-icon" ) {

            prodImg =  e.target.parentElement.children[0].getAttribute("src");
            prodName = e.target.parentElement.parentElement.children[1].children[0].children[0].textContent;
            prodPrice = e.target.parentElement.parentElement.children[1].children[0].children[1].children[0].textContent;
            //console.log(prodPrice)   
            addToCard(prodImg,prodName,prodPrice);
            cardUpdate();
            alertAddToCard(prodName,prodPrice);
        //console.log("carta tıkladın")
    }
    //console.log(prodImg)
    //alertAddToCard(prodName,prodPrice);
    
    //console.log(e.target)
    
});

cardOutside.addEventListener("click",(e)=>{


    if (e.target.className == "fa fa-times") {
        
        let targetElement = e.target.parentElement.parentElement.parentElement;
        targetElement.remove();
        cardUpdate();
        //console.log(targetElement);
        e.preventDefault();
    }

})


/***************** */

function  alertAddToCard(name,price) {
    
     setTimeout(()=>{

        addToCardAlert.innerHTML = `Adı : ${name} fiyatı : <strong>${price} SEPETE EKLENDİ</strong><br>`;

        addToCardAlert.classList.remove("hide");

    },100);

     setTimeout(()=>{

        addToCardAlert.classList.add("hide");

    },5000)



}

function cardUpdate() {
    
    let cardTotalCount = cardOutside.children.length;
    let totalPrice = 0;

    for (let i = 0; i < cardTotalCount; i++) {
       
       let allPrice =  Number(cardOutside.children[i].children[1].children[1].textContent)
       totalPrice +=  allPrice;
    }
    itemCount.innerHTML = cardTotalCount;
    itemTotal.innerHTML = totalPrice;
    //console.log(totalPrice)
    //console.log(cardOutside.children[0].children[]);

}

function addToCard(image,name,price){


    cardOutside.innerHTML += `
    <div class="dropdown-item d-flex align-items-center" >
        <img src="${image}" width="75px" height="75px" alt="">
        <div class="ml-3">
            <div class="d-flex justify-content-between" style="width: 450px;">
                <div>${name}</div>
                <i class="fa fa-times" style="font-size: 2rem;"></i>
            </div>
            <div>${price}</div>
        </div>
     </div>
    `
    
    //let adim = "Emin";
    
    //console.log("merhaba benim adım : " + adim + " selamlar");
    //console.log(`merhaba benim adım : ${adim} selamlar`);

}

function dataFilter(gelenDeger) {

    for (let i = 0; i < storeItems.length; i++) {

        if (storeItems[i].classList.contains("hide")) {

            storeItems[i].classList.remove("hide");

        }
        
    }

    
    for (let i = 0; i < storeItems.length; i++) {


        if (storeItems[i].getAttribute("data-item") != gelenDeger) {
            
            storeItems[i].classList.add("hide");

        }
        
    }

}

function getAllData() {
    

    for (let i = 0; i < storeItems.length; i++) {

        if (storeItems[i].classList.contains("hide")) {

            storeItems[i].classList.remove("hide");

        }
        
    }

}

function getSearch() {
    
    let valueUpperCase = (searchInput.value.replaceAll(" ","")).toUpperCase();
    //console.log(valueUpperCase)
    for (let i = 0; i < cardContent.length; i++) {
        
        let cardText = (cardContent[i].textContent.replaceAll(" ","")).toUpperCase();
        
        if (cardText.indexOf(valueUpperCase) > -1) {
            storeItems[i].style.display = "";
        }
        else{
            storeItems[i].style.display = "none";
        }
       
       //console.log((cardContent[i].textContent.replaceAll(" ","")).toUpperCase())
        
    }
    //console.log(valueUpperCase);

}



//console.log(storeItems);




























