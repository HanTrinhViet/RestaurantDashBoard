'use strict'

const items = document.querySelectorAll(".item");
const itemBought = document.querySelector(".item-bought");
let itemCount = 0;


items.forEach(function(item) {
  item.addEventListener("click", function() {
    itemCount++;
    itemBought.textContent = itemCount;
  })
})