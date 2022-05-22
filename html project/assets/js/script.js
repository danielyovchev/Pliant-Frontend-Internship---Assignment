function currentSlide(n){
    showSlide(slideIndex = n);
}
function showSlide(n){
    let i;
    let slides=document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if(n>slides.length){
        slideIndex=1;
    }
    if(n<1){
        slidesIndex=slides.length;
    }
    for(i=0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for(i=0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
automaticSlides();
let slidesIndex=0;
function automaticSlides(){
    let slides=document.getElementsByClassName("slide");
    for(let i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }
    slidesIndex++;
    if(slidesIndex>slides.length){
        slidesIndex=1;
    }
    slides[slidesIndex-1].style.display="block";
    setTimeout(automaticSlides, 5);
}
function dropMenu(){
    let x = document.getElementById("nav");
    if(x.className === "nav-tabs"){
        x.className+="responsive";
    }
    else{
        x.className="nav-tabs";
    }
}