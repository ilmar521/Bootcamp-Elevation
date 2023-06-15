
const submitForm = function () {
    const nameInput = document.getElementById('name_input')
    const salaryInput = document.getElementById('salary_input')
    const birthdayInput = document.getElementById('birthday_input')
    const phoneInput = document.getElementById('phone_input')            
    let errorMessage = ''
    if (nameInput.value.length <= 2) {
        errorMessage += 'Name must be longer than 2 characters\n'  
    }
    if (salaryInput.value <= 10000 || salaryInput.value > 16000) {
        errorMessage += 'Salary must be greater than 10,000 but less than 16,000\n'  
    }
    if (birthdayInput.value == '') {
        errorMessage += 'Birthday should be filled\n'  
    }
    if (phoneInput.value.length != 10) {
        errorMessage += 'Phone must be 10 digits long\n'  
    } 
    
    if (errorMessage != '') {
        let errorField = document.querySelector(".error")
        if (errorField) {
            errorField.innerText = errorMessage
        } else {
            errorField = document.createElement("p")  
            errorField.innerText = errorMessage
            errorField.classList.add('error')
            document.getElementById("form").appendChild(errorField)
        }
    } else {
        document.getElementById("form").style.display = 'none'
        welcomeField = document.createElement("h1")  
        welcomeField.innerText = `Welcome, ${nameInput.value}!`
        document.body.appendChild(welcomeField)     
    }
}