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
    sitevalue = document.getElementById("site").value;
    if(sitevalue == "") {
        document.getElementById("site").value = "go.jp";
    } else {
        document.getElementById("site").value = sitevalue + " OR " + "go.jp";
    }
}
function lg() {
    sitevalue = document.getElementById("site").value;
    if(sitevalue == "") {
        document.getElementById("site").value = "lg.jp";
    } else {
        document.getElementById("site").value = sitevalue + " OR " + "lg.jp";
    }
}
function ac() {
    sitevalue = document.getElementById("site").value;
    if(sitevalue == "") {
        document.getElementById("site").value = "ac.jp";
    } else {
        document.getElementById("site").value = sitevalue + " OR " + "ac.jp";
    }
}
function or() {
    sitevalue = document.getElementById("site").value;
    if(sitevalue == "") {
        document.getElementById("site").value = "or.jp";
    } else {
        document.getElementById("site").value = sitevalue + " OR " + "or.jp";
    }
}

function search() {
    keyword = document.getElementById("keyword").value;

    includetext = document.getElementById("include").value;
    if(includetext == "") {
        include = includetext;
    } else {
        include = '"' + includetext + '"';
    }

    excludetext = document.getElementById("exclude").value;
    if(excludetext == "") {
        exclude = excludetext;
    } else {
        exclude = "-" + excludetext;
    }

    sitetext = document.getElementById("site").value;
    if(sitetext == "") {
        site = sitetext;
    } else {
        site = "site%3A" + sitetext;
    }

    socialmedia = document.getElementById("socialmedia").value;

    searchword = site + "+" + socialmedia + "+" + keyword + "+" + include + "+" + exclude;

    location.href = "https://www.google.com/search?q=" + searchword;
}