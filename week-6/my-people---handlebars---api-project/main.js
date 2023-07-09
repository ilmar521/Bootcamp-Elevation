
const container = $('#container')

$(document).ready(function () {
    for (let i = 0; i < 10; i++) {
        $.ajax({
            url: 'https://randomuser.me/api/',
            dataType: 'json',
            success: function(data) {
                $('#container').append($(`
                <div class="card">
                    <p>${data.results[0].name.first} ${data.results[0].name.last}</p>
                    <p class="mail">${data.results[0].email}</p>
                </div>
                `)) 
            }
        });
    }
})
