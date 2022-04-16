var startstop = 0;
var beat,speed;
document.getElementById("bokenasu").style.width = "0px";
document.getElementById("bokenasu2").style.width = "0px";

function setbeat() {
    var beatselect = document.getElementById("beat-select").value;
    var beatinput = document.getElementById("beat-input").value;
    if(beatselect === ""){
        beat = beatinput;
    } else {
        beat = beatselect;
    }
}
function setspeed() {
    var speedselect = document.getElementById("speed-select").value;
    var speedinput = document.getElementById("speed-input").value;
    if(speedselect === ""){
        speed = speedinput;
    } else {
        speed = speedselect;
    }
}

function button() {
    if(startstop == 0){
        setbeat();
        setspeed();
        try {
            if(beat === "" || speed == ""){
                throw new Error;
            }
            document.getElementById("bokenasu2").style.width = "1400px";
        } catch (error) {
            alert("拍子数と速さを入力してください。");
            document.getElementById("bokenasu").style.width = "1400px";
        }
    }
}