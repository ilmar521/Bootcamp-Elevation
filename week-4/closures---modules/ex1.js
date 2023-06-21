const StringFormatter = function () {
    const capitalizeFirst = str => str.charAt(0).toUpperCase() + str.toLowerCase().slice(1)
    const toSkewerCase = str => str.replace(/ /g, '-');

    return {
        capitalizeFirst: capitalizeFirst,
        toSkewerCase: toSkewerCase    
    }
}

const formatter = StringFormatter()

console.log(formatter.capitalizeFirst("dorothy")) //should return Dorothy
console.log(formatter.toSkewerCase("blue box and me")) //should return blue-box
