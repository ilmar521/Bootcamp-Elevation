
const fetchBook = function (queryType, queryValue) {
  $.get(`https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`, function(result){
      result.items.forEach(item => {
        console.log(`Title: ${item.volumeInfo.title}; Authors: ${!item.volumeInfo.authors ? 'none' : item.volumeInfo.authors.join(', ')}; ISBN: ${!item.volumeInfo.industryIdentifiers ? 'none' : item.volumeInfo.industryIdentifiers[0].identifier}`)         
      });
  })  
}

fetchBook("isbn", 9789814561778)
fetchBook("title", "How to Win Friends and Influence People")
