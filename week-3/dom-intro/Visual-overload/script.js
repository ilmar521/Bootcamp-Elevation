const container = document.getElementById('container')

const getRandomColor = function () {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
const checkAllBoxesColors = function () {
    const boxes = document.getElementsByClassName('box')
    let allSame = true
    for (let i = 1; i < 10; i++) {
        if (boxes[i - 1].style.backgroundColor != boxes[i].style.backgroundColor) {
            allSame = false
            break    
        }
    }
    if (allSame) {
        let title = document.querySelector("h1")
        if (title) {
            title.remove()
        }
        title = document.createElement("h1")  
        title.innerText = 'Nice job!'
        container.insertBefore(title, container.firstChild)
    } 
}

for (let i = 0; i < 10; i++) {
    let box = document.createElement("div")  
    box.classList.add('box')
    box.addEventListener('mouseenter', function () {
        this.style.backgroundColor = getRandomColor()
        checkAllBoxesColors()
    })
    container.appendChild(box)
}