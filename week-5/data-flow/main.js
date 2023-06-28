
const render = Render()
const posts = Posts()

$('button').on('click', function () {
    posts.addPost($('#input_name').val(), $('#input_wish').val())
    render.render(posts.getPosts())
    $('#input_name').val('')
    $('#input_wish').val('')
})


$('#posts').on('click', '.post', function () {
    posts.removePost($(this).attr('id'))
    render.render(posts.getPosts())
});