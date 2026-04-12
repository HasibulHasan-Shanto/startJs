console.log('today im learning api')
const getComment = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(json => displayComment(json))
}

const displayComment = (comments) => {
    const commentContainer = document.getElementById('flex-part')
    commentContainer.innerHTML = ''
    for (const comment of comments) {
        console.log(comment)
        const commentCard = document.createElement('div')
        commentCard.innerHTML = `
            <div class="comment-card">
                <h3>
                    PostId: ${comment.postId}
                </h3>
                <h4>
                    Id: ${comment.id}
                </h4>
                <p>
                    Name: ${comment.name}
                </p>
                <p>
                    Email: ${comment.email}
                </p>
                <p>
                    Body: ${comment.body}
                </p>
        `
        commentContainer.appendChild(commentCard)
    }
}
getComment()

// {
//     "postId": 1,
//         "id": 1,
//             "name": "id labore ex et quam laborum",
//                 "email": "Eliseo@gardner.biz",
//                     "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium"
// },