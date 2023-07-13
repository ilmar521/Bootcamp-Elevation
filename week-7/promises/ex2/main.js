
const getRandomGIF = function (word) {
    return new Promise((resolve, reject) => {
        $.get(`http://api.giphy.com/v1/gifs/search?q=${word}&api_key=4OERPiFQVFPIgF4PODJLS3jtMInz5LOH`, function(result) {
            if (result.data.length > 0) {
                resolve(result.data[0].embed_url)
            } else {
                resolve('')
            }   
        }).fail(function(error) {
            reject(error)
        })
    }) 
}

const getRandomBook = function (word) {
    return new Promise((resolve, reject) => {
        $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`, function(result) {
            if (result.totalItems === 0) {
                resolve(`Couldn't find book with word ${word}`)
            } else {
                resolve(result.items[0].volumeInfo.title)
            }
        }).fail(function(error) {
            reject(error)
        })
    })
}


function getRandomData() {
    fetch("https://random-word-api.herokuapp.com/word")
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Request to random word failed");
    })
    .then(data => {
      return data[0];
    })
    .catch(error => {
      reject(error);
    })
    .then(word => {
        let gifPromise = getRandomGIF(word)
        let titlePromise = getRandomBook(word)
        return Promise.all([gifPromise, titlePromise])
    })   
    .then(promiseResults => {
        $('iframe').attr('src', promiseResults[0])
        $('#title').text(promiseResults[1])
    })
}

getRandomData()
