//clicking an image change the main image into this
const firstImg = document.querySelector("#img-1");
const midImg = document.querySelector("#img-2");
const lastImg = document.querySelector("#img-3");

firstImg.addEventListener("click", () => {
  document.getElementById("prodImg").src = firstImg.src;
});

midImg.addEventListener("click", () => {
  document.getElementById("prodImg").src = midImg.src;
});

lastImg.addEventListener("click", () => {
  document.getElementById("prodImg").src = lastImg.src;
});
