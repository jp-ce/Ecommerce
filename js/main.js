//hamburger menu

const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
let container = document.querySelector(".container");

menuBtn.addEventListener("click", () => {
  toggleMenu();
});

const toggleMenu = () =>{
   ["open", "close"].map(e => menuBtn.classList.toggle(e));
   menuBtn.classList.contains(open) ? menuOpen = true : menuOpen = false;
}

//sidebar

// menu collapsing when a link is clicked
document.querySelector(".menu-btn").addEventListener("click", () => {
  if (container.classList.contains("change")) {
    container.classList.remove("change");
    menuOpen = false;
  } else {
    container.classList.add("change");

    // Only applies when yoou click a link/ targets only the first child
    document
      .querySelectorAll(".menu-link, .menu-icons")
      .forEach((el) => {
        el.addEventListener("click", () => {
          menuBtn.classList.remove("open");
          container.classList.remove("change");
          menuOpen = false;
        });
      });
  }
});


//products
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const product_1 = document.getElementById("prod_1");
const product_2 = document.getElementById("prod_2");
const product_3 = document.getElementById("prod_3");


nextBtn.addEventListener("click", ()=>{
   goForward();
})

prevBtn.addEventListener("click", ()=>{
  goBackward();
})


const goForward = ()=>{
   product_1.classList.contains("show_products") ? changeClass1() :
    product_2.classList.contains("show_products") ? changeClass2() : changeClass3();

}

const goBackward = () => {
   product_3.classList.contains("show_products") ? changeClass2() : 
   product_2.classList.contains("show_products") ? changeClass1() : changeClass3();
}

// Clear but longer version
// const goForward = ()=>{
//    if(product_1.classList.contains("show_products")) return changeClass1();
//    if(product_2.classList.contains("show_products")) return changeClass2();
//    if(product_3.classList.contains("show_products")) return changeClass3();
// }

// const goBackward = () => {
//    if(product_3.classList.contains("show_products")) return changeClass2()
//    if(product_2.classList.contains("show_products")) return changeClass1()
//    if(product_1.classList.contains("show_products")) return changeClass3()
// }

const changeClass1 = () => {
   ["show_products" , "hide_products"].map( c => product_1.classList.toggle(c));
   ["show_products" , "hide_products"].map( c => product_2.classList.toggle(c));
}

const changeClass2 = () => {
   ["show_products" , "hide_products"].map( c => product_2.classList.toggle(c));
   ["show_products" , "hide_products"].map( c => product_3.classList.toggle(c));
}

const changeClass3 = () => {
   ["show_products" , "hide_products"].map( c => product_3.classList.toggle(c));
   ["show_products" , "hide_products"].map( c => product_1.classList.toggle(c));
}


