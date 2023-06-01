// Spot Check

const person = {
    name: "Julius",
    speak: function(food) {
      console.log(`I like ${food}`)
    }
}

person.speak('cheescake')

// Exercise 1
// Write a function called isEven that accepts a number as a parameter and checks if the number is even or not. 
// Return true if it is even or false if it is odd. Don’t Google this one ;) Use modulo %

function isEven(number) {
    return number % 2 == 0
}
console.log(`8 is even number? ${isEven(8)}`)
console.log(`9 is even number? ${isEven(9)}`)

// Exercise 2
// Write a function that takes in an array of numbers.
// The function should loop through the numbers and (using the function from Exercise 1) print out the odd numbers.

function printOddNumbers(arr) {
    for (let i of arr) {
        if (!isEven(i)) {
            console.log(i)
        }
    }
}

printOddNumbers([4,5,7,8,9,14])

// Exercise 3
// Write a JavaScript function that accepts two parameters: one being an array of integers, and the other being a number. The function should return true or false depending on 
// whether the number exists in the array.


function checkExists(arr, number) {
    return arr.indexOf(number) != -1    
}

console.log(checkExists([1, 2, 3], 2))
console.log(checkExists([1, 2, 3], 5))

// Exercise 4
// Create an object called calculator.
// It should have two methods: add and subtract
// Both methods take two parameters, and should return the sum/difference of both numbers.

const calculator = {
    add: function (x, y) {
        return x + y   
    },  
    subtract: function (x, y) {
        return x - y   
    }        
}

const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)) 

// Exercise 5 (Extra Practice)
// Complete the following code:

function increaseByNameLength(money, name) {
    return money * name.length    
}
function makeRegal(name) {
    return `His Royal Highness, ${name}`   
}

const turnToKing = function(name, money) {
    name = name.toUpperCase()
    money = increaseByNameLength(money, name) 
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"