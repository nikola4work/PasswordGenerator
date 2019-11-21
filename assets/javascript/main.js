// variables
var char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var sym = "!@#$%^&*=-_";

var charNum = document.getElementById("charNum");
var numBox = document.getElementById("num");
var symBox = document.getElementById("sym");
var submit = document.getElementById("generate");
var yourPw = document.getElementById("yourPw");
var clipboard = document.getElementById("myFunction");

// submit button

submit.addEventListener("click", function(e) {
    var characters = char;
    numBox.checked ? (characters += num) : "";
    symBox.checked ? (characters += sym) : "";
    yourPw.value = password(charNum.value, characters);
});

//  Copy Password to clipboard
function copyClipBoard() {
    var copyText = document.getElementById("yourPw");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Password is Copied");
}

// for loop

function password(l, characters) {
    var pwd = "";
    for (var i = 0; i < l; i++) {
        pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pwd;
}

// USERS NAME

var myInput = document.getElementById("myInput");
var name = prompt("Enter your name!");
alert("Please use resposibly... !!");
myInput.innerText = "Hello " + name + "!" + "" + "Welcome to my page";

// DO YOU WISH TO CONTINUE

var myInput2 = document.getElementById("myInput2");
var text = confirm("Do you wish to continue ?");

//RUNS IF ELSE BASED ON USERS INPUT
if (text) {
    alert("Have fun and follow the instructions");
} else {
    document.getElementById("testClose").style.display = "block";
    document.getElementById("testOpen").style.display = "none";
}

var video = document.getElementById("myVideo");
var playBtn = document.getElementById("myBtn");

function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}

function hiddenDiv() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}