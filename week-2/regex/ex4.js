const firstURL = "www.workingurl.com"
const secondURL = "iamabadurl.com"
const thirdURL = "www.doireallywork.net"

const urlValidator = function(str){
    const re = /^www\..+\.com$/
    return re.test(str)
}

console.log(urlValidator(firstURL)) //return true
console.log(urlValidator(secondURL)) //return false
console.log(urlValidator(thirdURL)) //return false