import { purchases } from "./data.js";

const basket = document.getElementById("basket");

const htmlMarkup = purchases.map((purchase) => {
  const { itemName, inStock, image, elegibility, price } = purchase;

  return `
  <div class="checkout-item">
  <!-- Image -->
  <div class="checkout-item-img">
    <img src=${image} alt=${itemName} />
  </div>
  <!-- Info -->

  <div class="checkout-item-info flex-center-btwn fix-align">
    <div class="col-1">
      <h1>${itemName}</h1>
      <p>${inStock}</p>
      <p>${elegibility}</p>
      <h1 class="show-price">${price}</h1>
      <label for="">
        <ul>
          <li>
            <input type="checkbox" class="" /> This will be a gift
            <a href="" class="m-fb">Learn more</a>
          </li>
        </ul>
      </label>
      <label for="">Quantity</label>
      <select name="" id="">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>
      <a href="">Delete</a>
      <a href="">Save for later</a>
      <a href="">See more related products</a>
    </div>
    <div class="col-2">
      <p class="hide-price">${price}</p>
    </div>
  </div>
</div>
  `;
});

basket.insertAdjacentHTML("beforeend", htmlMarkup);
