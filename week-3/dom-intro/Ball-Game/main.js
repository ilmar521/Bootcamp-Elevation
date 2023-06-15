const down = document.getElementById("down")
console.log(down)

const ball = document.getElementById("ball");
const playingField = document.getElementById("playing-field")

const subHeader = document.createElement("h2")
subHeader.innerText = "Created by Kirill Lunev"
subHeader.classList.add('sub-header')
document.body.insertBefore(subHeader, document.body.firstChild)

ball.style.backgroundColor = "yellow"

document.addEventListener("keydown", function(event) {
    const key = event.key;
    if (key === "ArrowUp") {
        moveUp();
    } else if (key === "ArrowDown") {
        moveDown();
    } else if (key === "ArrowLeft") {
        moveLeft();
    } else if (key === "ArrowRight") {
        moveRight();
    }
});

const moveRight = function(){
    let left = parseInt(ball.style.left) || 0
    const ballWidth = ball.offsetWidth
    left += 15
    const playingFieldWidth = playingField.offsetWidth
    if (left + ballWidth > playingFieldWidth) {
        left = playingFieldWidth - ballWidth
    }
    ball.style.left = left + "px"    
}

const moveUp = function(){
    let top = parseInt(ball.style.top) || 0
    top -= 15
    if (top < 0) {
        top = 0
    }
    ball.style.top = top + "px"
}

const moveLeft = function(){
    let left = parseInt(ball.style.left) || 0
    left -= 15
    if (left < 0) {
        left = 0
    }
    ball.style.left = left + "px"
}

const moveDown = function(){
    let top = parseInt(ball.style.top) || 0
    const ballHeight = ball.offsetHeight
    top += 15
    const playingFieldHeight = playingField.offsetHeight
    if (top + ballHeight > playingFieldHeight) {
        top = playingFieldHeight - ballHeight
    }
    ball.style.top = top + "px"
}

const changeColor = function (event) {
    event.target.style.backgroundColor = "#8e44ad"
}