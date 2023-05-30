// Exercise 1, 2

const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

for (let i in names) {
    people.push({name: names[i], age: ages[i]})       
}
people.forEach(element => {
    console.log(`${element.name} is ${element.age} years old`);    
});

// Exercise 3

const posts = [
    {id: 1, text: "Love this product"},
    {id: 2, text: "This is the worst. DON'T BUY!"},
    {id: 3, text: "So glad I found this. Bought four already!"}
  ]
let delArray = []

for (let i in posts) {
    if (posts[i].id == 2) {
        delArray.push(i)
    }   
}; 
for (const i of delArray) {
    posts.splice(i,1);      
}

// Exercise 4

const postsSecond = [
    {
      id: 1, 
      text: "Love this product",
      comments: []
    },
    { 
      id: 2, 
      text: "This is the worst. DON'T BUY!", 
      comments: [
                  {id: 1, text: "Idiot has no idea"}, 
                  {id: 2, text:"Fool!"}, 
                  {id: 3, text: "I agree!"}
                ]
     },
     {
      id: 3, 
      text: "So glad I found this. Bought four already!",
      comments: []
     }
  ]


postsSecond.forEach(element => {
    if (element.id == 2) {
       let indexForDel = NaN;
       for (let i in element.comments) {
            if (element.comments[i].id == 3) {
                indexForDel = i;
            }   
        };  
        if (!isNaN(indexForDel)) {
            element.comments.splice(indexForDel, 1)     
        }    

    }
});

// Extension

const dictionary = {
    "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
    "B": ["Banana", "Bonkers", "Brain", "Bump"],
    "C": ["Callous", "Chain", "Coil", "Czech"]
}


for (const letter of Object.keys(dictionary)) {
    console.log(`Words that begin with ${letter}:`);  
    dictionary[letter].forEach(element => {
        console.log('    ' + element);      
    });  
}
