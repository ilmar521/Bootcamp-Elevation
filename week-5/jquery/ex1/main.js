$('button').on('click', function () {
    $('ul').append(`<li>${$('input').val()}</li>`)   
    $('input').val('')
})
