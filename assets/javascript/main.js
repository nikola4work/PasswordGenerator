// variables //
var char = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
var upper = "QWERTYUIOPASDFGHJKLZXCVBNM";
var lower = "qwertyuiopasdfghjklzxcvbnm";
var symbols = "!@#$%^&*()_+/*<>:";
var numbers = "123456789";

var charNum = document.getElementById("charNum");
var numBox = document.getElementById("num");
var symBox = document.getElementById("sym");
var uppercase = document.getElementById("upper");
var lowercase = document.getElementById("lower");
var btnGen = document.getElementById("generate");
var btnClip = document.getElementById("clipboard");

console.log(password(12, char));

// functions //
function password(l, characters) {
    var pwd = "";
    for (var i = 0; i < l; i++) {
        pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pwd;
}