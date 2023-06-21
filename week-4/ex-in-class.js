
function main() {
    let y = 0
    return function (x) {
        y = x + y 
        return y
    }
}

const add = main()

console.log(add(3));  //3
console.log(add(1));  //4
console.log(add(2));  //3
console.log(add(2));  //4
console.log(add(8));  //10