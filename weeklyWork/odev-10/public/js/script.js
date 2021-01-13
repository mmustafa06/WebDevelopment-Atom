//Buttons id
let allButtons = document.getElementById("all");
let cakesButtons = document.getElementById("cakes");
let cupcakesButtons = document.getElementById("cupcakes");
let sweetsButtons = document.getElementById("sweets");
let doughnutsButtons = document.getElementById("doughnuts");

let searchButton = document.getElementById("search-item");

/* allCards */
let allCards = document.getElementsByClassName("store-item");

/* adEventListener */
allButtons.addEventListener("click", function (e) {
    getAllItems(allCards);
    e.preventDefault();
});

cakesButtons.addEventListener("click", function (e) {

    displayNone(allCards, "cakes");
    e.preventDefault();
})

cupcakesButtons.addEventListener("click", function (e) {
    displayNone(allCards, "cupcakes");
    e.preventDefault();
})

sweetsButtons.addEventListener("click", function (e) {
    displayNone(allCards, "sweets");
    e.preventDefault();
})

doughnutsButtons.addEventListener("click", function (e) {
    displayNone(allCards, "dougnuts");
    e.preventDefault();
})


searchButton.addEventListener("keyup", mySearchFunction);


function displayNone(e, dataFilter) {

    for (let index = 0; index < e.length; index++) {

        if (e[index].classList.contains("hide") ) {
            
            e[index].classList.remove("hide");
        }  
    }

    for (let index = 0; index < e.length; index++) {

        if (e[index].getAttribute("data-item") != dataFilter ) {
            
            e[index].classList.add("hide");
        }  
    }
}

function getAllItems(e) {
    for (let index = 0; index < e.length; index++) {

        if (e[index].classList.contains("hide") ) {
            
            e[index].classList.remove("hide");
        }  
    }
}


let basliklar = document.querySelectorAll("#store-item-name");

function mySearchFunction() {
    
    getAllItems(allCards);
    searchText = (searchButton.value.replaceAll(" ", "")).toUpperCase();

    for (let i = 0; i < basliklar.length; i++) {
        
        itemText = (basliklar[i].textContent.replaceAll(" ", "")).toUpperCase();
        
        if (itemText.indexOf(searchText) > -1) {
            allCards[i].style.display = ""; 
        } else{
            allCards[i].style.display = "none";
        }
        
    }

}

//mySearchFunction();



