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

submit.addEventListener("click", function(e) {
    var characters = char;
    numBox.checked ? (characters += num) : "";
    symBox.checked ? (characters += sym) : "";
    yourPw.value = password(charNum.value, characters);
});

//  Copy Password to clipboard
function myFunction() {
    var copyText = document.getElementById("yourPw");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}

function password(l, characters) {
    var pwd = "";
    for (var i = 0; i < l; i++) {
        pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pwd;
}