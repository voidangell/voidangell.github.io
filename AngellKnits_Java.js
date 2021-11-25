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
//hidden patterns//
let productListing5 = document.getElementsByClassName("productListing5");
productListing5.addEventListener("mouseover", exposeWriting);
console.log("working");
productListing5.addEventListener("click", exposeWriting);

function exposeWriting() {
  hidden5.removeAttribute("hidden");

  let hidden5 = document.getElementById("hidden");
}
