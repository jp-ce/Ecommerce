//clicking an image change the main image into this
const firstImg = document.getElementById("img-1");
const midImg = document.getElementById("img-2");
const lastImg = document.getElementById("img-3");
const curImg = document.getElementById("prodImg");

[firstImg, midImg, lastImg].map(ev => ev.addEventListener("click", function(){
   curImg.src = this.src;
}));