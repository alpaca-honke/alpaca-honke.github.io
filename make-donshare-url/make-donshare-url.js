let text;
let url;
let decoded_url;
const donshare = new URL("https://donshare.net/share.html");

function done() {
    text = document.getElementById("text").value;
    url = document.getElementById("url").value;
    //エンコードを解除する
    processed_url = encodeURI(decodeURIComponent(url));
    share_text = `${text}\n${processed_url}`;
    donshare.searchParams.set("text",share_text);
    
    document.getElementById("result").value = donshare.href;
}

function copy() {
    navigator.clipboard.writeText(document.getElementById("result").value).then(() => {
        alert("コピーされました!")
    })
}
