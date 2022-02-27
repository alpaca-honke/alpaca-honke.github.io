function go() {
    var sitevalue = document.getElementById("site").value;
    if(sitevalue == "") {
        document.getElementById("site").value = "go.jp";
    } else {
        document.getElementById("site").value = sitevalue + " OR " + "go.jp";
    }
}
function lg() {
    var sitevalue = document.getElementById("site").value;
    if(sitevalue == "") {
        document.getElementById("site").value = "lg.jp";
    } else {
        document.getElementById("site").value = sitevalue + " OR " + "lg.jp";
    }
}
function ac() {
    var sitevalue = document.getElementById("site").value;
    if(sitevalue == "") {
        document.getElementById("site").value = "ac.jp";
    } else {
        document.getElementById("site").value = sitevalue + " OR " + "ac.jp";
    }
}
function or() {
    var sitevalue = document.getElementById("site").value;
    if(sitevalue == "") {
        document.getElementById("site").value = "or.jp";
    } else {
        document.getElementById("site").value = sitevalue + " OR " + "or.jp";
    }
}

function search() {
    var keyword = document.getElementById("keyword").value;

    var qinclude = document.getElementById("include").value;
    if(qinclude == "") {
        var include = qinclude;
    } else {
        var include = '"' + qinclude + '"';
    }

    var qexclude = document.getElementById("exclude").value;
    if(qexclude == "") {
        var exclude = qexclude;
    } else {
        var exclude = "-" + qexclude;
    }

    var qsite = document.getElementById("site").value;
    if(qsite == "") {
        var site = qsite;
    } else {
        var site = "site%3A" + qsite;
    }

    var socialmedia = document.getElementById("socialmedia").value;

    var searchword = site + "+" + socialmedia + "+" + keyword + "+" + include + "+" + exclude;

    location.href = "https://www.google.com/search?q=" + searchword;
}
