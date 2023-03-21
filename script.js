document.querySelector(".zp").addEventListener("input", function (e) {
  this.value = this.value.replace(/[^\d.]/g, "");
});
document.querySelector(".hours").addEventListener("input", function (e) {
  this.value = this.value.replace(/[^\d.]/g, "");
});
document.querySelector(".hour").addEventListener("input", function (e) {
  this.value = this.value.replace(/[^\d.]/g, "");
});

let result = document.querySelector(".result");
let clear = document.querySelector(".clear");

result.addEventListener("click", function () {
  let zp = document.querySelector(".zp");
  let hours = document.querySelector(".hours");
  let hour = document.querySelector(".hour");

  let header_h1 = document.querySelector(".header_h1");
  let form_block1 = document.querySelector(".form_block1");
  let form_block2 = document.querySelector(".form_block2");
  let form_block3 = document.querySelector(".form_block3");
  let infohome = document.querySelector(".infohome");
  let header_h1d = document.querySelector(".header_h1d");
  let info_zp = document.querySelector(".info-zp");
  let h1result = document.querySelector(".h1result");
  let info_zp_p = document.querySelector(".info-zp_p");
  header_h1d.style.display = "block";
  header_h1.style.display = "none";
  form_block1.style.display = "none";
  form_block2.style.display = "none";
  form_block3.style.display = "none";
  infohome.style.display = "none";
  zp.style.display = "none";
  hours.style.display = "none";
  hour.style.display = "none";
  info_zp.style.display = "block";
  h1result.style.display = "block";
  info_zp_p.style.display = "block";
  result.style.display = "none";
  clear.style.display = "block";

  let res = ((zp.value * 0.87) / hours.value) * hour.value;
  let h1hours = document.querySelector(".h1result");
  h1hours.textContent = res.toFixed(2) + " руб";
});
clear.addEventListener("click", function () {
  let zp = document.querySelector(".zp");
  let hours = document.querySelector(".hours");
  let hour = document.querySelector(".hour");

  let header_h1 = document.querySelector(".header_h1");
  let form_block1 = document.querySelector(".form_block1");
  let form_block2 = document.querySelector(".form_block2");
  let form_block3 = document.querySelector(".form_block3");
  let infohome = document.querySelector(".infohome");
  let header_h1d = document.querySelector(".header_h1d");
  let info_zp = document.querySelector(".info-zp");
  let h1result = document.querySelector(".h1result");
  let info_zp_p = document.querySelector(".info-zp_p");
  header_h1d.style.display = "none";
  header_h1.style.display = "block";
  form_block1.style.display = "block";
  form_block2.style.display = "block";
  form_block3.style.display = "block";
  infohome.style.display = "block";
  zp.style.display = "block";
  hours.style.display = "block";
  hour.style.display = "block";
  info_zp.style.display = "none";
  h1result.style.display = "none";
  info_zp_p.style.display = "none";
  result.style.display = "block";
  clear.style.display = "none";
  zp.value = "";
  hours.value = "";
  hour.value = "";
});
