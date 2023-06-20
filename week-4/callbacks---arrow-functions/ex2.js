
const getTime = function (func) {
    func(new Date())
}


const returnTime = function (time) {
    console.log('The current time is: ' + time)
}
  
getTime(returnTime)