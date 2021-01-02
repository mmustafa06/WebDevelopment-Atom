/* INPUT */

var inputName = document.getElementById("name");
var inputCourse = document.getElementById("course");
var inputAuthor = document.getElementById("author");

var submitBtn = document.getElementById("submitBtn");
var infoCard = document.getElementById("cardContainer");
var loadIcon = document.getElementById("load");


inputName.addEventListener("keyup", inputControl);
inputCourse.addEventListener("keyup", inputControl);
inputAuthor.addEventListener("keyup", inputControl);


function inputControl(){
    if(inputName.value.length == 0 || inputCourse.value.length == 0 || inputAuthor.value.length == 0){
        submitBtn.disabled = true;
    }else{
        submitBtn.disabled = false;
    }
}

submitBtn.addEventListener("click", tiklandi);


function tiklandi(){
    var cardName = inputName.value;
    var course = inputCourse.value;
    var author = inputAuthor.value;
    var resimAdresi = randomSayi();

    loadShow();

    setTimeout(function(){
        loadHide();
        
        infoCard.innerHTML += `
    
    <div class="col-11 mx-auto col-md-6 col-lg-4 my-3">
        <div class="card text-left">
            <img src="./img/cust-${resimAdresi}.jpg" class="card-img-top" alt="">
            <div class="card-body">
                <!-- customer name -->
                <h6 class="text-capitalize "><span class="badge badge-warning mr-2">name :</span><span
                        id="customer-name"> ${cardName}</span></h6>
                <!-- end of customer name -->
                <!-- customer name -->
                <h6 class="text-capitalize my-3"><span class="badge badge-success mr-2">course
                        :</span><span id="customer-course">
                        ${course}
                    </span></h6>
                <!-- end of customer name -->
                <!-- customer name -->
                <h6 class="text-capitalize"><span class="badge badge-danger mr-2">author :</span><span
                        id="course-author"> ${author}</span></h6>
                <!-- end of customer name -->
            </div>
        </div>

        <!-- single customer -->
    </div>


    `;
    }, 3000);

    

}

function randomSayi(){
    return Math.floor(Math.random()*6);
}

function loadShow(){
    loadIcon.style.display = "block";
}

function loadHide(){
    loadIcon.style.display = "none";
}