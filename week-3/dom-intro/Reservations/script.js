
const input_field = document.getElementById('input_field')

const reservations = {
    bob: { claimed: false },
    ted: { claimed: true }
}

const checkReservation = function () {
    const inputValue = input_field.value.toLowerCase()
    if (inputValue == '') {
        alert('You should enter the name!')
        return
    }

    if (reservations[inputValue]) {
        if (!reservations[inputValue].claimed) {
            alert(`Welcome ${inputValue}`)
        }
        else {
            alert("Hmm, someone already claimed this reservation")
        }
    }
    else {
        alert("You have no reservation")
    }   
}
