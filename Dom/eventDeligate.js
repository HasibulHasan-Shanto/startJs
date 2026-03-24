// const items = document.getElementsByClassName('item')
// for (const item of items) {
//     item.addEventListener('click', function(event){
//         event.target.parentNode.removeChild(event.target)
//     })
// }
document.getElementById('list-item').addEventListener('click', function(event){
    event.target.parentNode.removeChild(event.target)
})
document.getElementById('add-new-item').addEventListener('click', function(){
    const ol = document.getElementById('list-item')
    const li = document.createElement('li')
    li.classList.add('item')
    li.innerText = 'Add another item'
    ol.appendChild(li)
})

const taskList = document.getElementById('task-list')
const addTask = document.getElementById('add-task').addEventListener('click', function(){
    const getText = document.getElementById('task-input')
    const newText = getText.value
    if(newText === ''){
        alert('Please write something')
        return
    }
    const li = document.createElement('li')
    li.innerText = newText
    taskList.appendChild(li)
    getText.value = ''
})
taskList.addEventListener('click', function(event){
        if(event.target.classList.contains('delete-btn')){
            event.target.parentNode.removeChild(event.target)
    }
    
})
document.getElementById('clear-all').addEventListener('click', function(){
    taskList.innerText = ''
})