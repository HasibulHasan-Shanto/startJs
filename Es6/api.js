console.log('today im learning api')

// API holo application programming interface 
// JSON holo javaScript Object Notation..and json holo data pathanor akta formate ... r sei formate hole json formate and setake amra .json ai vabe lekhii

const student = {
    id: 1256,
    name: 'Hasibul Hasan Shanto',
    designation: 'Customer Care Executive',
    salary: 12500
}
// amra jodi kono akta object ke json e convert korte cai tokhon amra json.stringify method use korbo like

const studentJson = JSON.stringify(student)
// console.log(studentJson)
// abr amra caile sei json file ta ke object e convert korte pari parse method use kore like

const studentParse = JSON.parse(studentJson)
// console.log(studentParse)




// akhen fetch holo akta function jeta api ke call kore kono kisu return kore na just promise kore mane holo promise return kore and wait korte bole je wait koro ami result dibo


const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(json => console.log(json))
}

const getPost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
        .then(json => displayPost(json))
}

const displayPost = (posts) => {
    // posts.forEach(post => {
    //     console.log(post)
    // });
    const container = document.getElementById('container')
    for (const post of posts) {
        console.log(post)
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="number">
            <h2>UserId: ${post.userId}</h2>
            <h4>Id: ${post.id}</h4>
            <p>Body: ${post.body}</p>
            <p>Title: ${post.title}</p>
        </div>
`
        container.appendChild(div)
    }
}
getPost()