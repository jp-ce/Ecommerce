//hamburger menu

const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
let container = document.querySelector(".container");

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});

//sidebar

// menu collapsing when a link is clicked
document.querySelector(".menu-btn").addEventListener("click", () => {
  if (container.classList.contains("change")) {
    container.classList.remove("change");
    menuOpen = false;
  } else {
    container.classList.add("change");

    // OOnly applies when yoou click a link/ targets only the first child
    document
      .querySelectorAll(".menu-link, .social-media-link")
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
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

nextBtn.addEventListener("click", () => {
  if (document.getElementById("prod_1").classList.contains("show_products")) {
    document.getElementById("prod_1").classList.remove("show_products");
    document.getElementById("prod_1").classList.add("hide_products");
    document.getElementById("prod_2").classList.add("show_products");
  } else if (
    document.getElementById("prod_2").classList.contains("show_products")
  ) {
    document.getElementById("prod_2").classList.remove("show_products");
    document.getElementById("prod_2").classList.add("hide_products");

    document.getElementById("prod_3").classList.add("show_products");
  } else if (
    document.getElementById("prod_3").classList.contains("show_products")
  ) {
    document.getElementById("prod_3").classList.remove("show_products");
    document.getElementById("prod_3").classList.add("hide_products");
    document.getElementById("prod_1").classList.add("show_products");
  }
});

prevBtn.addEventListener("click", () => {
  if (document.getElementById("prod_3").classList.contains("show_products")) {
    document.getElementById("prod_3").classList.remove("show_products");
    document.getElementById("prod_2").classList.add("show_products");
  } else if (
    document.getElementById("prod_2").classList.contains("show_products")
  ) {
    document.getElementById("prod_2").classList.remove("show_products");
    document.getElementById("prod_1").classList.add("show_products");
  } else if (
    document.getElementById("prod_1").classList.contains("show_products")
  ) {
    document.getElementById("prod_1").classList.remove("show_products");
    document.getElementById("prod_3").classList.add("show_products");
  }
});
