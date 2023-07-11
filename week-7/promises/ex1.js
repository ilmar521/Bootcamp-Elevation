function getRandomBook() {
  fetch("https://random-word-api.herokuapp.com/word")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Request to random word failed");
    })
    .then((data) => {
      return data[0];
    })
    .catch((error) => {
      reject(error);
    })
    .then((word) => {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Request to random book failed");
        })
        .then((data) => {
            if (data.totalItems === 0) {
                console.log(`Couldn't find book with word ${word}`)
            } else {
                console.log(data.items[0].volumeInfo.title)
            }
          
        })
        .catch((error) => {
          reject(error);
        });
    });
}

getRandomBook();
