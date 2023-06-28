
const Render = function () {
    
    const render = (posts) => {
        $('#posts').empty()
        for (const post of posts) {
            const postDiv = $(`<div class="post" id=${post.id}></div>`) 
            $(postDiv).append(`<span><b>${post.name}: </b></span>`)
            $(postDiv).append(`<span>${post.wish}</span>`)
            $('#posts').append(postDiv)
        }
    }
    
    return {
        render
    }

}