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
const updateComment = document.getElementById('update-comment')
const commentButton = document.getElementById('comment-button').addEventListener('click', function(){
    const comment = document.getElementById('comment')
    const inputComment = comment.value
            if(inputComment === ''){
        alert('Please write something')
        return
    }
    updateComment.innerText = inputComment
    updateComment.style.display = 'block'
    comment.value = ''
})
document.getElementById('delete-button').addEventListener('click', function(){
        updateComment.innerText = ''
        updateComment.style.display = 'none'
    })