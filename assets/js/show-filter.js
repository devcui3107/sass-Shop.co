const filterShow = document.querySelector("#show-filter-mobile");
const filterProduct = document.querySelector("#filter-product");
const filterClose = document.querySelector("#filter-close");
const filterOverlay = document.querySelector(".filter__overlay");

// Event
filterShow.addEventListener("click", showFilterMobile);
filterClose.addEventListener("click", closeFilterMobile);
filterOverlay.addEventListener("click", closeFilterMobile);

// Function
function showFilterMobile() {
  filterProduct.classList.toggle("active");
  filterOverlay.classList.toggle("active");
}

function closeFilterMobile() {
  filterProduct.classList.toggle("active");
  filterOverlay.classList.toggle("active");
}
