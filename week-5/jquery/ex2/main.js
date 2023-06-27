$('button').on('click', function () {
    const item = $(`<li>${$('input').val()}</li>`).on('click', function () {
        $(this).remove()
    })
    $('ul').append(item)   
    $('input').val('')
})
