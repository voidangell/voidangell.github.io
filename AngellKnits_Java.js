//Page Buttons//
//onclick="homepageLoad()"//
function homepageLoad() {
  window.location.href = "index.html";
}
//onclick="aboutUsLoad()"//
function aboutUsLoad() {
  window.location.href = "About_Us.html";
}
//onclick="patternLoad()"//
function patternLoad() {
  window.location.href = "Patterns.html";
}
//onclick="oAndeLoad()"//
function oAndeLoad() {
  window.location.href = "OandE.html";
}
//onclick="scheduleLoad()"//
function scheduleLoad() {
  window.location.href = "Schedule.html";
}
//onclick="contactUsLoad()"//
function contactUsLoad() {
  window.location.href = "Contact_Us.html";
}
//social web addresses//
//onclick="instagramLink()"
function instagramLink() {
  window.open("https://www.instagram.com", "_blank");
}
//onclick="ravelryLink()"
function ravelryLink() {
  window.open("https://www.ravelry.com", "_blank");
}
//onclick="tiktokLink()"//
function tiktokLink() {
  window.open("https://tiktok.com", "_blank");
}
window.addEventListener("load", updateCopywrite);

function updateCopywrite() {
  var currentYear = new Date().getFullYear();
  document.getElementById("copyWrite").innerHTML = currentYear;
}

//show hidden activator//
window.onload = function () {
  //listing 1//
  document.querySelector(".product1").addEventListener("click", showListing1);
  document
    .querySelector(".product1Img")
    .addEventListener("click", showListing1);
  document
    .querySelector(".product1Img")
    .addEventListener("mouseover", showListingA1);
  document
    .querySelector(".product1Img")
    .addEventListener("mouseout", showListingB1);
  //listing 2//
  document.querySelector(".product2").addEventListener("click", showListing2);
  document
    .querySelector(".product2Img")
    .addEventListener("click", showListing2);
  document
    .querySelector(".product2Img")
    .addEventListener("mouseover", showListingA2);
  document
    .querySelector(".product2Img")
    .addEventListener("mouseout", showListingB2);
  //listing 3//
  document.querySelector(".product3").addEventListener("click", showListing3);
  document
    .querySelector(".product3Img")
    .addEventListener("click", showListing3);
  document
    .querySelector(".product3Img")
    .addEventListener("mouseover", showListingA3);
  document
    .querySelector(".product3Img")
    .addEventListener("mouseout", showListingB3);
  //listing 4//
  document.querySelector(".product4").addEventListener("click", showListing4);
  document
    .querySelector(".product4Img")
    .addEventListener("click", showListing4);
  document
    .querySelector(".product4Img")
    .addEventListener("mouseover", showListingA4);
  document
    .querySelector(".product4Img")
    .addEventListener("mouseout", showListingB4);
  //listing 5//
  document.querySelector(".product5").addEventListener("click", showListing5);
  document
    .querySelector(".product5Img")
    .addEventListener("click", showListing5);
  document
    .querySelector(".product5Img")
    .addEventListener("mouseover", showListingA5);
  document
    .querySelector(".product5Img")
    .addEventListener("mouseout", showListingB5);
};

//hidden listing - click//
//listing1 //
function showListing1() {
  var productListing1 = document.querySelector(".productListing1");
  if (productListing1.classList.contains("holder") === true) {
    productListing1.classList.toggle("active");
    productListing1.classList.remove("holder");
  } else {
    productListing1.classList.toggle("hidden");
    productListing1.classList.toggle("active");
  }

  console.log(productListing1.classList);
}
function showListingA1() {
  const productListing1 = document.querySelector(".productListing1");
  if (productListing1.classList.contains("hidden")) {
    productListing1.classList.toggle("hidden");
    productListing1.classList.add("holder");
  }

  console.log(productListing1.classList);
}
function showListingB1() {
  const productListing1 = document.querySelector(".productListing1");
  if (productListing1.classList.contains("active") === false) return;
  else if (productListing1.classList.contains("hidden") === false)
    productListing1.classList.toggle("hidden");
  productListing1.classList.remove("holder");

  console.log(productListing1.classList);
}
//listing 2//
function showListing2() {
  var productListing2 = document.querySelector(".productListing2");
  if (productListing2.classList.contains("holder") === true) {
    productListing2.classList.toggle("active");
    productListing2.classList.remove("holder");
  } else {
    productListing2.classList.toggle("hidden");
    productListing2.classList.toggle("active");
  }

  console.log(productListing2.classList);
}
function showListingA2() {
  const productListing2 = document.querySelector(".productListing2");
  if (productListing2.classList.contains("hidden")) {
    productListing2.classList.toggle("hidden");
    productListing2.classList.add("holder");
  }

  console.log(productListing2.classList);
}
function showListingB2() {
  const productListing2 = document.querySelector(".productListing2");
  if (productListing2.classList.contains("active") === false) return;
  else if (productListing2.classList.contains("hidden") === false)
    productListing2.classList.toggle("hidden");
  productListing2.classList.remove("holder");

  console.log(productListing2.classList);
}
//listing 3//
function showListing3() {
  var productListing3 = document.querySelector(".productListing3");
  if (productListing3.classList.contains("holder") === true) {
    productListing3.classList.toggle("active");
    productListing3.classList.remove("holder");
  } else {
    productListing3.classList.toggle("hidden");
    productListing3.classList.toggle("active");
  }

  console.log(productListing3.classList);
}
function showListingA3() {
  const productListing3 = document.querySelector(".productListing3");
  if (productListing3.classList.contains("hidden")) {
    productListing3.classList.toggle("hidden");
    productListing3.classList.add("holder");
  }

  console.log(productListing3.classList);
}
function showListingB3() {
  const productListing3 = document.querySelector(".productListing3");
  if (productListing3.classList.contains("active") === false) return;
  else if (productListing3.classList.contains("hidden") === false)
    productListing3.classList.toggle("hidden");
  productListing3.classList.remove("holder");

  console.log(productListing3.classList);
}
//listing 4//
function showListing4() {
  var productListing4 = document.querySelector(".productListing4");
  if (productListing4.classList.contains("holder") === true) {
    productListing4.classList.toggle("active");
    productListing4.classList.remove("holder");
  } else {
    productListing4.classList.toggle("hidden");
    productListing4.classList.toggle("active");
  }

  console.log(productListing4.classList);
}
function showListingA4() {
  const productListing4 = document.querySelector(".productListing4");
  if (productListing4.classList.contains("hidden")) {
    productListing4.classList.toggle("hidden");
    productListing4.classList.add("holder");
  }

  console.log(productListing4.classList);
}
function showListingB4() {
  const productListing4 = document.querySelector(".productListing4");
  if (productListing4.classList.contains("active") === false) return;
  else if (productListing4.classList.contains("hidden") === false)
    productListing4.classList.toggle("hidden");
  productListing4.classList.remove("holder");

  console.log(productListing4.classList);
}
//listing 5//
function showListing5() {
  var productListing5 = document.querySelector(".productListing5");
  if (productListing5.classList.contains("holder") === true) {
    productListing5.classList.toggle("active");
    productListing5.classList.remove("holder");
  } else {
    productListing5.classList.toggle("hidden");
    productListing5.classList.toggle("active");
  }

  console.log(productListing5.classList);
}
function showListingA5() {
  const productListing5 = document.querySelector(".productListing5");
  if (productListing5.classList.contains("hidden")) {
    productListing5.classList.toggle("hidden");
    productListing5.classList.add("holder");
  }

  console.log(productListing5.classList);
}
function showListingB5() {
  const productListing5 = document.querySelector(".productListing5");
  if (productListing5.classList.contains("active") === false) return;
  else if (productListing5.classList.contains("hidden") === false)
    productListing5.classList.toggle("hidden");
  productListing5.classList.remove("holder");

  console.log(productListing5.classList);
}
