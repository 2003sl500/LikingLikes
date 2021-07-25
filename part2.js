console.log("Javascript is working");

var countTop = 9, countMiddle = 12, countLower = 9;

function rightTopBtn() {
    console.log("rightTopBtn");
    var elementInfo = document.querySelector("#rightTopTop p span");
    countTop++;
    elementInfo.innerText = countTop;
}

function rightMiddleBtn() {
    // console.log("rightMiddleBtn");
    console.log("rightMiddleBtn");
    var elementInfo = document.querySelector("#rightMiddleTop p span");
    countMiddle++;
    elementInfo.innerText = countMiddle;
}

function rightLowerBtn() {
    // console.log("rightLowerBtn");
    console.log("rightLowerBtn");
    var elementInfo = document.querySelector("#rightLowerTop p span");
    countLower++;
    elementInfo.innerText = countLower;
}