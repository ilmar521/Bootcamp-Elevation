people_info = [
    {
      name: "guido",
      profession: "bungalow builder",
      age: 17,
      country: "canaland",
      city: "sydurn",
      catchphrase: "what a piece of wood!"
    },
    {
      name: "petra",
      profession: "jet plane mechanic",
      age: 31,
      country: "greenmark",
      city: "bostork",
      catchphrase: "that's my engine, bub"
    },
    {
      name: "damian",
      profession: "nursery assistant",
      age: 72,
      country: "zimbia",
      city: "bekyo",
      catchphrase: "with great responsibility comes great power"
    }
  ]

const getAge = function(age) {
    if (age < 21) {
        return 'underage'
    } else if (age > 55) {
        return '55+'    
    }
    return `${age}` 
}

const capitalize = function(str) {
    let capitalizedStr = ""
    capitalizedStr += str[0].toUpperCase(); 
    capitalizedStr += str.slice(1)
    return capitalizedStr
}

const catchPhraseReturn = function(person) {
    return ` ${capitalize(person.name)} loves to say "${capitalize(person.catchphrase)}"`    
}

const getFrofession = function(str) {
    let arr = str.split(" ")
    for (const i in arr) {
        arr[i] = capitalize(arr[i]) 
    }
    return arr.join(" ")
}

const getSummary = function(person) {
    let summary = ""
    summary += capitalize(person.name)
    summary += ` is ${getAge(person.age)} ` //Yes - you can put a function call inside the tick quotes!
    summary += getFrofession(person.profession)
    summary += ` from ${capitalize(person.city)}, ${capitalize(person.country)} .`
    summary += catchPhraseReturn(person)
    return summary
}

for (const person of people_info) {
    console.log(getSummary(person))
}