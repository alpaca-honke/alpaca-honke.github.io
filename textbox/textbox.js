function google() {
  var keywords = document.getElementById("keywords").value;
  top.location.href = "https://www.google.co.jp/search?q=" + keywords + "";
}
function yahoo() {
  var keywords = document.getElementById("keywords").value;
  top.location.href = "https://search.yahoo.co.jp/search?p=" + keywords + "";
}
function bing() {
  var keywords = document.getElementById("keywords").value;
  top.location.href = "https://www.bing.com/search?q=" + keywords + "";
}
function setstyle() {
  var csslink = document.getElementById("csslink");
  var cssselect = document.getElementById("cssselect").value;
  csslink.setAttribute("href", cssselect);
}
