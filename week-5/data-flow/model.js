
const Posts = function () {
    const _posts = []
    let counter = 0

    const addPost = (name, wish) => {
        counter++
        _posts.push({id: counter, name: name, wish: wish})
    }
    const removePost = (id) => {
        const index = _posts.findIndex(item => item.id === parseInt(id))
        if (index !== -1) {
            _posts.splice(index, 1);
            counter--
        }
    }

    const getPosts = () => [..._posts]

    return {
        addPost,
        removePost,
        getPosts
    }
}