console.log("working");

var likeBtn = document.querySelector("#likesCounter");
var counter = 3;

function addLikes() {
    counter++;
    likeBtn.innerText = counter;
    console.log(likeBtn);
}