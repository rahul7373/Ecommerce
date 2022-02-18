let menuBtn = document.querySelector(".menu");
let cancelBtn = document.querySelector(".cancel");
let navList = document.querySelector(".navlist");


menuBtn.onclick = function(){
    navList.classList.add("active");
}

cancelBtn.onclick = function(){
    navList.classList.remove("active");
}


