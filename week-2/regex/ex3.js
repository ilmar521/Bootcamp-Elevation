const email1 = "cat@meow.com"
const email2 = "bad1npuT!@gmail.com"
const email3 = "meow@gmail.net"

const emailValidator = function(str){
    const re = /^[a-zA-Z]+@[a-zA-Z]+\.com$/
    return re.test(str)
}

console.log(emailValidator(email1)) //return true
console.log(emailValidator(email2)) //return false
console.log(emailValidator(email3)) //return false