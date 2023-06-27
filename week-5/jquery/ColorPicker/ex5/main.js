$(document).ready(function () {
    const colors = $("span")
    for (const color of colors) {
        $(color).addClass('picker')
        $(color).attr('style',`background-color: ${$(color).data().color};`)
        $(color).on('click', function () {
            $('.box').attr('style',`background-color: ${$(color).data().color};`)    
        })
    }
})
