import { categories, items, magazineItems, trendyBrands } from "./data.js";
//hamburger menu

const container = document.querySelector(".container");
const menuBtn = document.querySelector(".menu-btn");
const categoryGrid = document.querySelector(".grid-wrapper");
const productsPage = document.getElementById("products-showcase");
const featuredMagazines = document.getElementById("magazine-showcase");
const brands = document.getElementById("brands");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let menuOpen = false;

menuBtn.addEventListener("click", () => {
  toggleMenu();
});

const toggleMenu = () => {
  ["open", "close"].map((e) => menuBtn.classList.toggle(e));
  menuBtn.classList.contains(open) ? (menuOpen = true) : (menuOpen = false);
};

//sidebar

// menu collapsing when a link is clicked
document.querySelector(".menu-btn").addEventListener("click", () => {
  if (container.classList.contains("change")) {
    container.classList.remove("change");
    menuOpen = false;
  } else {
    container.classList.add("change");

    // Only applies when yoou click a link/ targets only the first child
    document.querySelectorAll(".menu-link, .menu-icons").forEach((el) => {
      el.addEventListener("click", () => {
        menuBtn.classList.remove("open");
        container.classList.remove("change");
        menuOpen = false;
      });
    });
  }
});

//Grid Categories Section

categoryGrid.innerHTML = categories
  .map((category) => {
    const { id, img, description } = category;

    return `<div class="card card${id}">
  <div class="card-img-wrapper">
    <img src=${img} alt=${description}/>
  </div>
  <div class="card-info flex-center">
    <div class="card-info-background dw-bg">
      <h1 class="txt-lg uppercase light">${description}</h1>
    </div>
  </div>
</div>`;
  })
  .join("");

//products Page

//events
window.addEventListener("DOMContentLoaded", () => showItems(currentSlide));

let currentSlide = 0;

const showItems = (index) => {
  productsPage.innerHTML = items[index]
    .map((item) => {
      const { image } = item;

      return `<div class="item flex-center light-bg">
      <div class="item-img-wrapper">
        <a href="./product-page.html"
          ><img src=${image} alt=""
        /></a>
      </div>
      <div class="item-info">
        <p class="">Lorem ipsum dolor sit amet.</p>
        <p class="item__price"><strong>£49.99</strong></p>
      </div>
      <div class="add-to-cart">
        <a href="./cart.html" class="btn primary-btn txt-sm"
          >Add to cart <i class="fas fa-shopping-cart"></i
        ></a>
      </div>
    </div>`;
    })
    .join("");
};

prevBtn.addEventListener("click", () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = items.length - 1;
  }
  showItems(currentSlide);
});
nextBtn.addEventListener("click", () => {
  currentSlide++;
  if (currentSlide > items.length - 1) {
    currentSlide = 0;
  }
  showItems(currentSlide);
});

//magazines
featuredMagazines.innerHTML = magazineItems
  .map((item) => {
    const { image, title } = item;
    return `<div class="magazines dg-bg">
  <div class="magazines-img-wrapper">
    <img src=${image} alt=${title} />
  </div>
  <div class="magazines-info flex-center">
    <p class="txt-xs">${title}</p>
    <p class="txt-sm italize">
      "Lorem ipsum dolor sit amet dolom consectetur adipisicing elit."
    </p>
    <a href="#" class="btn sub-btn">Read the full story &#10148;</a>
  </div>
</div>`;
  })
  .join("");

//brands
brands.innerHTML = trendyBrands.map((brand) => {
  const { image } = brand;
  return `
    <img src=${image} alt="" />
    
    `;
});
