console.log('today im learning getPostPutPatch')

const users = 'https://jsonplaceholder.typicode.com/posts'

const getPost = () => {
    fetch(users)
        .then(response => response.json())
        .then(data => displayPost(data))
}

const displayPost =(posts) => {
    console.log(posts)
    const fivePost = posts.slice(0, 5)
    const postContainer = document.getElementById('post-container')
    postContainer.innerHTML = ''
    
    for (const post of posts) {
        console.log(post)
        const div = document.createElement('div')
        div.classList.add('post-card')
        div.innerHTML = `
                       <h3>
                    UserId: ${post.userId}
                </h3>
                <h4>
                    Id: ${post.id}
                </h4>
                <p>
                    Title: ${post.title}
                </p>
                <p>
                    Body: ${post.body}
                </p>
                    <button id="delete">
        Delete
    </button>
        `
        div.querySelector('#delete').addEventListener('click', () => {
            div.remove()
        })
        postContainer.appendChild(div)
    }
    
}
getPost()
// const users = 'https://jsonplaceholder.typicode.com/posts'

// const getPost = () => {
//     fetch(users)
//         .then(response => response.json())
//         .then(data => displayPost(data))
// }

// const displayPost = (posts) => {
//     console.log(posts)
//     const postContainer = document.getElementById('post-container')
//     postContainer.innerHTML = ''
//     const usersPost = posts.filter(post => post.userId === 1)
//     for (const post of usersPost) {
//         console.log(post)
//         const div = document.createElement('div')
//         div.classList.add('post-card')
//         div.innerHTML = `
//                        <h3>
//                     UserId: ${post.userId}
//                 </h3>
//                 <h4>
//                     Id: ${post.id}
//                 </h4>
//                 <p>
//                     Title: ${post.title}
//                 </p>
//                 <p>
//                     Body: ${post.body}
//                 </p>
//         `
//         postContainer.appendChild(div)
//     }

// }
// getPost()


// body
// :
// "doloremque ex facilis sit sint culpa\nsoluta assumenda eligendi non ut eius\nsequi ducimus vel quasi\nveritatis est dolores"
// id
// :
// 98
// title
// :
// "laboriosam dolor voluptates"
// userId
// :
// 10