
const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."

const specialChars = [",", ".", "'", '"',"?", "!", ";"]
const wordCounts = {}

function removeSpecialCharacters(str) {
    for (const char of specialChars) {
        str = str.split(char).join("")
    }    
    return str
}

function handleArray(arr) {
    arr.forEach(word => {
        wordCounts[word] = wordCounts[word] + 1 || 1          
    });    
}

function countWordsInStory() {
    let preparedStory = removeSpecialCharacters(story)
    handleArray(preparedStory.split(' '))
}

countWordsInStory()
console.table(wordCounts)