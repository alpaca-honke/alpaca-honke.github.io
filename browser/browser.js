let url;
let urlbox = document.getElementById("url");
let iframe = document.getElementById("iframe");

function changepage(){
  url = urlbox.value;
  iframe.setAttribute("src", url);
}
