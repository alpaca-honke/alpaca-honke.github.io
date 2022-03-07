//make new object of sound of each key
const c3 = new Audio("C-1 Piano.wav");
const cs3 = new Audio("C♯-1 Piano.wav");
const d3 = new Audio("D-1 Piano.wav");
const ds3 = new Audio("D♯-1 Piano.wav");
const e3 = new Audio("E-1 Piano.wav");
const f3 = new Audio("F-1 Piano.wav");
const fs3 = new Audio("F♯-1 Piano.wav");
const g3 = new Audio("G-1 Piano.wav");
const gs3 = new Audio("G♯-1 Piano.wav");
const a3 = new Audio("A-1 Piano.wav");
const as3 = new Audio("A♯-1 Piano.wav");
const b3 = new Audio("B-1 Piano.wav");
const c4 = new Audio("C Piano.wav");
const cs4 = new Audio("C♯ Piano.wav");
const d4 = new Audio("D Piano.wav");
const ds4 = new Audio("D♯ Piano.wav");
const e4 = new Audio("E Piano.wav");
const f4 = new Audio("F Piano.wav");
const fs4 = new Audio("F♯ Piano.wav");
const g4 = new Audio("G Piano.wav");
const gs4 = new Audio("G♯ Piano.wav");
const a4 = new Audio("A Piano.wav");
const as4 = new Audio("A♯ Piano.wav");
const b4 = new Audio("B Piano.wav");
const c5 = new Audio("C2 Piano.wav");
const cs5 = new Audio("C♯2 Piano.wav");
const d5 = new Audio("D2 Piano.wav");
const ds5 = new Audio("D♯2 Piano.wav");
const e5 = new Audio("E2 Piano.wav");
const f5 = new Audio("F2 Piano.wav");
const fs5 = new Audio("F♯2 Piano.wav");
const g5 = new Audio("G2 Piano.wav");
const gs5 = new Audio("G♯2 Piano.wav");

document.addEventListener('keydown', event => {
  var keycode = event.key;

  if(keycode === "z"){
    c3.currentTime = 0;
    c3.play();
  } else if(keycode === "s"){
    cs3.currentTime = 0;
    cs3.play();
  } else if(keycode === "x"){
    d3.currentTime = 0;
    d3.play();
  } else if(keycode === "d"){
    ds3.currentTime = 0;
    ds3.play();
  } else if(keycode === "c"){
    e3.currentTime = 0;
    e3.play();
  } else if(keycode === "v"){
    f3.currentTime = 0;
    f3.play();
  } else if(keycode === "g"){
    fs3.currentTime = 0;
    fs3.play();
  } else if(keycode === "b"){
    g3.currentTime = 0;
    g3.play();
  } else if(keycode === "h"){
    gs3.currentTime = 0;
    gs3.play();
  } else if(keycode === "n"){
    a3.currentTime = 0;
    a3.play();
  } else if(keycode === "j"){
    as3.currentTime = 0;
    as3.play();
  } else if(keycode === "m"){
    b3.currentTime = 0;
    b3.play();
  } else if(keycode === "q" || keycode === ",") {
    c4.currentTime = 0;
    c4.play();
  } else if(keycode === "2" || keycode === "l"){
    cs4.currentTime = 0;
    cs4.play();
  } else if(keycode === "w" || keycode === "."){
    d4.currentTime = 0;
    d4.play();
  } else if(keycode === "3" || keycode === ";"){
    ds4.currentTime = 0;
    ds4.play();
  } else if(keycode === "e" || keycode === "/"){
    e4.currentTime = 0;
    e4.play();
  } else if(keycode === "r"){
    f4.currentTime = 0;
    f4.play();
  } else if(keycode === "5"){
    fs4.currentTime = 0;
    fs4.play();
  } else if(keycode === "t"){
    g4.currentTime = 0;
    g4.play();
  } else if(keycode === "6"){
    gs4.currentTime = 0;
    gs4.play();
  } else if(keycode === "y"){
    a4.currentTime = 0;
    a4.play();
  } else if(keycode === "7"){
    as4.currentTime = 0;
    as4.play();
  } else if(keycode === "u"){
    b4.currentTime = 0;
    b4.play();
  } else if(keycode === "i"){
    c5.currentTime = 0;
    c5.play();
  } else if(keycode === "9"){
    cs5.currentTime = 0;
    cs5.play();
  } else if(keycode === "o"){
    d5.currentTime = 0;
    d5.play();
  } else if(keycode === "0"){
    ds5.currentTime = 0;
    ds5.play();
  } else if(keycode === "p"){
    e5.currentTime = 0;
    e5.play();
  } else if(keycode === "@"){
    f5.currentTime = 0;
    f5.play();
  } else if(keycode === "^"){
    fs5.currentTime = 0;
    fs5.play();
  } else if(keycode === "["){
    g5.currentTime = 0;
    g5.play();
  } else if(keycode === "¥"){
    gs5.currentTime = 0;
    gs5.play();2
  }
});
