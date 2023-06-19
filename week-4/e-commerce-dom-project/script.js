const container = document.getElementById('content-container')

let cart = []

const products = [
    {name: '15-logitech-harmony-express', price: 100, img: 'img/1.15-logitech-harmony-express.jpg'},
    {name: 'Logitech-BRIO-4K-Webcam', price: 200, img: 'img/2.Logitech-BRIO-4K-Webcam.jpg'},
    {name: 'Webcams-2x1-fullres--1024x512', price: 300, img: 'img/3.webcams-2x1-fullres--1024x512.jpg'},
    {name: 'Microsoft-LifeCam-HD-3000-Webcam', price: 400, img: 'img/4.Microsoft-LifeCam-HD-3000-Webcam.jpg'},
    {name: 'Logitech-Conference-Cam-BCC950', price: 500, img: 'img/5.Logitech-Conference-Cam-BCC950.jpg'},   
]

const generateNextId = function () {
    let maxId = 0
    cart.forEach(item => {
      const itemId = parseInt(item.id)
      if (itemId > maxId) {
        maxId = itemId
      }
    });
    return (maxId + 1).toString()
}

const cleanContainer = function () {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }       
}

const addToCart = function (event) {
    const index = products.findIndex(item => item.name === event.target.dataset.productName)
    if (index !== -1) {
        const newItem = {
            id: generateNextId(),
            name: products[index].name,
            price: products[index].price,
        };
        cart.push(newItem);    
    }
}

const removeFromCart = function (event) {
    const index = cart.findIndex(item => item.id === event.target.id)
    if (index !== -1) {
        cart.splice(index, 1);
    }
    renderPageCart()
}

const renderMainPage = function () {
    cleanContainer() 
}

const renderPageAboutUs = function () {
    cleanContainer() 
    let header = document.createElement('h1')
    header.innerText = 'Welcome to our the best electronic devices store!'
    container.appendChild(header)
}

const renderPageAllProducts = function () {

    cleanContainer()
    let header = document.createElement('h3')
    header.innerText = 'Products'
    container.appendChild(header)

    for (const product of products) {
        let cardContainer = document.createElement('div')
        cardContainer.classList.add('container')
        cardContainer.classList.add('mt-2')
        container.appendChild(cardContainer)

        let card = document.createElement('div')
        card.classList.add('card')
        cardContainer.appendChild(card)

        let img = document.createElement('img')
        img.classList.add('card-img-top')
        img.classList.add('w-25')
        img.src = product.img
        card.appendChild(img)

        let cardBody = document.createElement('div')
        cardBody.classList.add('card-body')
        card.appendChild(cardBody)

        let nameOfProduct = document.createElement('h5')
        nameOfProduct.classList.add('card-title')
        nameOfProduct.innerText = product.name
        cardBody.appendChild(nameOfProduct)
        
        let price = document.createElement('p')
        price.classList.add('card-text')
        price.innerText = `Price: ${product.price}`
        cardBody.appendChild(price)

        let addButton = document.createElement('a')
        addButton.classList.add('btn')
        addButton.classList.add('btn-primary')
        addButton.setAttribute('data-product-name', product.name);
        addButton.addEventListener('click', addToCart)
        addButton.innerText = 'Add to cart'
        cardBody.appendChild(addButton)
    }

}

const renderPageCart = function () {
    cleanContainer() 
    let header = document.createElement('h3')
    header.innerText = 'Your cart'
    container.appendChild(header)

    let listContainer = document.createElement('ul')
    listContainer.classList.add('list-group')
    container.appendChild(listContainer)
    
    let liHeader = document.createElement('li')
    liHeader.classList.add('list-group-item')
    liHeader.classList.add('fs-4')
    liHeader.innerText = 'Items cart'
    listContainer.appendChild(liHeader)

    let totalInCart = 0

    for (const item of cart) {
        let liItem = document.createElement('li')
        liItem.classList.add('list-group-item')
        liItem.innerText = `item: ${item.name}. Price: ${item.price}`
        liItem.appendChild(document.createElement('br'))
        let removeButton = document.createElement('a')
        removeButton.classList.add('bg-warning')
        removeButton.classList.add('border-warning')
        removeButton.classList.add('btn')
        removeButton.classList.add('btn-primary')
        removeButton.id = item.id
        removeButton.innerText = 'Remove'
        removeButton.addEventListener('click', removeFromCart)
        liItem.appendChild(removeButton)

        listContainer.appendChild(liItem)

        totalInCart += item.price
    }

    let liTotal= document.createElement('li')
    liTotal.classList.add('list-group-item')
    liTotal.classList.add('fs-4')
    liTotal.innerText = `Total ${totalInCart}`
    listContainer.appendChild(liTotal)        
}