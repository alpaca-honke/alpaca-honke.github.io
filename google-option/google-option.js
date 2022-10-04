let sitevalue;
let includetext;
let include;
let excludetext;
let exclude;
let sitetext;
let site;
let socialmedia;
let searchword;

function go() {
    document.getElementById("site").value = "go.jp";
}
function lg() {
    document.getElementById("site").value = "lg.jp";
}
function ac() {
    document.getElementById("site").value = "ac.jp";
}
function or() {
    document.getElementById("site").value = "or.jp";
}

function search() {
    keyword = encodeURIComponent( document.getElementById("keyword").value );

    includetext = document.getElementById("include").value;
    if(!includetext) {
        include = encodeURIComponent( includetext );
    } else {
        include = encodeURIComponent( '"' + includetext + '"' );
    }

    excludetext = document.getElementById("exclude").value;
    if(!excludetext) {
        exclude = encodeURIComponent( excludetext );
    } else {
        exclude = encodeURIComponent( "-" + excludetext );
    }

    sitetext = document.getElementById("site").value;
    if(!sitetext) {
        site = encodeURIComponent( sitetext );
    } else {
        site = encodeURIComponent( "site:" + sitetext );
    }

    socialmedia = encodeURIComponent( document.getElementById("socialmedia").value );

    if (sitetext !== "" && socialmedia !== "") {
        searchword = site + "+" + keyword + "+" + include + "+" + exclude;
    } else {
        searchword = site + "+" + socialmedia + "+" + keyword + "+" + include + "+" + exclude;
    }
    
    location.href = "https://www.google.com/search?q=" + searchword;
}
