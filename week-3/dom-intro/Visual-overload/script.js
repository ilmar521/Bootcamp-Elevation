const container = document.getElementById('container')

const getRandomColor = function () {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

for (let i = 0; i < 10; i++) {
    let box = document.createElement("div")  
    box.classList.add('box')
    box.addEventListener('mouseenter', function () {
        this.style.backgroundColor = getRandomColor()
    })
    container.appendChild(box)
}