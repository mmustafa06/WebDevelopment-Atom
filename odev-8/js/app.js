
/* INPUT */
var inputName = document.getElementById("name");
var course = document.getElementById("course");
var author = document.getElementById("author");
/* BUTTONS */
var submitBtn = document.getElementById("submitBtn");
/* DIV */
var cardContainer = document.getElementById("cardContainer");
var load = document.getElementById("load");

/* EVENT LISTENER */

submitBtn.addEventListener("click",tiklandi);
inputName.addEventListener("keyup",butonKontrol);
course.addEventListener("keyup",butonKontrol);
author.addEventListener("keyup",butonKontrol);

/* FUNCTIONS */

function butonKontrol(){
  if (inputName.value.length == 0) {
    submitBtn.disabled = true;
  }
  else if(course.value.length == 0){
    submitBtn.disabled = true;
  }
  else if(author.value.length == 0){
    submitBtn.disabled = true;
  }
  else{
    submitBtn.disabled = false;
  }
}


function tiklandi() {
    var nameValue = inputName.value;
    var courseValue = course.value;
    var authorValue = author.value;
    var randomSayi = randomResimGetir();
    loadingShow();
    setTimeout(function () {
      loadingHide();
      cardContainer.innerHTML += `
    <div class="col-11 mx-auto col-md-6 col-lg-4 my-3">
      <div class="card text-left">
       <img src="./img/cust-${randomSayi}.jpg" class="card-img-top" alt="">
       <div class="card-body">
        <!-- customer name -->
        <h6 class="text-capitalize "><span class="badge badge-warning mr-2">name :  </span><span id="customer-name"> ${nameValue}</span></h6>
        <!-- end of customer name -->
        <!-- customer name -->
        <h6 class="text-capitalize my-3"><span class="badge badge-success mr-2">course :</span><span id="customer-course">
          ${courseValue} <!-- İNPUTLARA GİRİLEN DEĞER -->
         </span></h6>
        <!-- end of customer name -->
        <!-- customer name -->
        <h6 class="text-capitalize"><span class="badge badge-danger mr-2">author :</span><span id="course-author"> ${authorValue}</span></h6>
        <!-- end of customer name -->
       </div>
      </div>
    </div>
    `;
    },3000);
    
    

}


function randomResimGetir() {
   return Math.floor(Math.random() * 6 );
}

function loadingShow() {
  load.style.display="block";
}

function loadingHide() {
  load.style.display="none";
}

// randomResimGetir() // 2
// randomResimGetir() // sadece fonksiyon çalışır

