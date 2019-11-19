var myInput = document.getElementById("myInput");
var name = prompt("Enter your name!");
alert("Please use resposibly... all rights reserved!");
myInput.innerText = "Hello " + name + "!" + "" + "Welcome to my page";

var myInput2 = document.getElementById("myInput2");
var text = prompt("Do you wish to continue Yes Or No");
myInput2.innerText = "USER INSTRUCTIONS:";

if (text) {
    alert("Have fun and follow the instructions");
} else {
    alert("Goodbye");
}

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
function myFunction() {
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