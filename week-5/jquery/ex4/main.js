$(document).ready(function () {
    $('.item').on('click', function () {
        if ($(this).data().instock) {
            const thisItem = $(`#${$(this).text()}`)
            if (thisItem.length) {
                const newCount = parseInt(thisItem.data().count) + 1
                thisItem.text(`${$(this).text()} ${newCount}`) 
                thisItem.data().count = newCount    
            } else {
                const item = $(`<div class="cart-item" id="${$(this).text()}" data-count="1">${$(this).text()}</div>`).on('click', function () {
                    if (parseInt($(this).data().count) == 1) {
                        $(this).remove()
                    } else {
                        const newCount = parseInt($(this).data().count) - 1
                        $(this).text(`${$(this).attr('id')} ${newCount}`) 
                        $(this).data().count = newCount           
                    }
                })
                $('#cart').append(item) 
            }          
        }     
    })
})