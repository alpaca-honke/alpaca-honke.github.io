let text;
let url;
let decoded_url;
const misskeyshare = new URL("https://misskeyshare.link/share");

function done() {
    text = document.getElementById("text").value;
    url = document.getElementById("url").value;
    //エンコードを解除する
    processed_url = encodeURI(decodeURIComponent(url));
    share_text = `${text}\n${processed_url}`;
    misskeyshare.searchParams.set("text",share_text);
    
    document.getElementById("result").value = misskeyshare.href;
}

function copy() {
    navigator.clipboard.writeText(document.getElementById("result").value).then(() => {
        alert("コピーされました!")
    })
}
