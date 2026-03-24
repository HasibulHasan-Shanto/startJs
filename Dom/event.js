console.log('event')

// js e koek vabe event handling kora jay first option sorasorii console e onclick 

// second option function use kore event handling kora like 

function makeYellow(){
    document.body.style.backgroundColor = 'yellow'
}
function makeRed(){
    document.body.style.backgroundColor = 'red'
}

// Third option id use kore event handling kora like 

const blueBtn = document.getElementById('blue-button')
blueBtn.onclick = function makeBlue(){
    document.body.style.backgroundColor = 'blue'
    const create = document.createElement('div')
    // create.classList.add('food-name')
    create.innerHTML = `
             <div>
        <h1>Create Element</h1>
                <ul>
            <li class="food-name">Apple</li>
            <li class="food-name">Banana</li>
            <li class="food-name">Mango</li>
            <li class="food-name">Jackfruit</li>
            <li class="food-name">Orange</li>
            <li class="food-name">Coconut</li>
            <li class="food-name">Graphs</li>
        </ul>
    </div>
    `
    blueBtn.appendChild(create)
}

// Option number four .addEventListener use kore event handling kora like 

const lightBlue = document.getElementById('button-light-blue').addEventListener('click', function(){
    document.body.style.backgroundColor = 'lightBlue'
})

//amra most of the time addEventListener ai method use korbo

const updateBtn =document.getElementById('update-btn').addEventListener('click', function(){
    const updateInnerTExt = document.getElementById('update-innerText')
    updateInnerTExt.innerText = `Today i'm working Event Handler`
})

// how to update input field 

const inputName = document.getElementById('input-name').addEventListener('click', function(){
    const name = document.getElementById('name')
    const updateName = name.value
    const userName = document.getElementById('user-name')
    userName.innerText = updateName
})

// create a comment box
const commentContainer = document.getElementById('comment-container')
const commentButton = document.getElementById('comment-button').addEventListener('click', function(){
    const comment = document.getElementById('comment')
    const inputComment = comment.value
            if(inputComment === ''){
        alert('Please write something')
        return
    }
    const createComment = document.createElement('p')
    createComment.classList.add('update-comment')
    createComment.style.display = 'block'
    createComment.innerHTML = inputComment
    commentContainer.appendChild(createComment)
    comment.value = ''
})
document.getElementById('delete-button').addEventListener('click', function(){
        commentContainer.innerHTML = ''
    })



const postContainer = document.getElementById('post-container')
const postButton = document.getElementById('post-button').addEventListener('click', function(){ 
    const getText = document.getElementById('text-area')
    const updateComment = getText.value
    if(updateComment === ''){
        alert('Write something')
        return
    }
    const createElement = document.createElement('p')
    createElement.classList.add('create-post')
    createElement.style.display = 'block'
    createElement.innerHTML = updateComment
    postContainer.appendChild(createElement)
    getText.value = ''
})
document.getElementById('delete-post-button').addEventListener('click', function(){
    postContainer.innerText = ''
})