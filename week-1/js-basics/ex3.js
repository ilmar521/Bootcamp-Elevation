let p1 = {
    name: 'Jill',
    age: 24,
    city: 'NY'
}

let p2 = {
    name: 'Robert',
    age: 24,
    city: 'NY'
}

if (p1.age == p2.age) {
    if (p1.city == p2.city) {
        console.log(`${p1.name} wanted to date ${p2.name}`);
    } else {
        console.log(`${p1.name} wanted to date ${p2.name}, but couldn’t`);
    }
}

let library = {
    books: [{title: 'Harry Potter', author: 'Rouling'}, {title: 'War and peace', author: 'Tolstoi'}]
}

console.log(library.books[0]);