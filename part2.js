console.log("Javascript is working");

var counts = [9,12,9];

function rightTopBtn() {
    console.log("rightTopBtn");
    var elementInfo = document.querySelector("#rightTopTop p span");
    counts[0]++;
    elementInfo.innerText = counts[0];
}

function rightMiddleBtn() {
    console.log("rightMiddleBtn");
    var elementInfo = document.querySelector("#rightMiddleTop p span");
    counts[1]++;
    elementInfo.innerText = counts[1];
}

function rightLowerBtn() {
    // console.log("rightLowerBtn");
    console.log("rightLowerBtn");
    var elementInfo = document.querySelector("#rightLowerTop p span");
    counts[2]++;
    elementInfo.innerText = counts[2];
}