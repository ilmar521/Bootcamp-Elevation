
const arrGenerator = []

$('.generator').on('click', function () {
    const processor = $(this).closest('.processor')
    console.log($(processor).attr('id'))     
    const idComp =  $(this).closest('.processor').closest('.computer').data('id') 
    arrGenerator.push({cmp_id: idComp})
    console.log(idComp)
    console.log($(processor).siblings('.BUS')[0].innerText)
})

$('.validator').on('click', function () {
    const processor = $(this).closest('.ram').siblings('.processor')[0]
    console.log($(processor).find('button')[0].innerText)
    console.log($(this).closest('.ram').siblings('.MB')[0].innerText)
    for (const QR of $(processor).find('.QR')) {
        console.log($(QR)[0].innerText)    
    }
})