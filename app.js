const toDoList = document.querySelector('#to-do-form');
const toDoToAdd = document.querySelector('input[id="add-item"]');
const toDoArea = document.querySelector('#to-do-area');
const ul = document.querySelector('ul');

toDoList.addEventListener('submit', function(e) {
    e.preventDefault();
    const newToDo = toDoCreator(toDoToAdd.value);
    ul.appendChild(newToDo);
    toDoToAdd.value = '';
});

function toDoCreator(toDo) {
    const toDoContainer = document.createElement('li');
    const addedToDo = document.createElement('p');
    const completed = document.createElement('input');
    const remove = document.createElement('button');

    addedToDo.innerText = ' ' + toDo + ' ';
    addedToDo.style.display = 'inline';
    addedToDo.setAttribute('class', 'strikethroughText');

    completed.setAttribute('type', 'checkbox');
    completed.setAttribute('name', 'strikeCheckbox');
    completed.style.display = 'inline';
    completed.addEventListener('change', function(e) {
        if (this.checked) {
            addedToDo.style.textDecoration = 'line-through';
        } else {
            addedToDo.style.textDecoration = 'none';
        }
    })

    remove.innerText = 'X';
    remove.style.display = 'inline';
    remove.addEventListener('click', function(e) {
        if (e.target.tagName === 'BUTTON') {
            e.target.parentElement.remove();
        }
    });

    toDoContainer.appendChild(completed);
    toDoContainer.appendChild(addedToDo);
    toDoContainer.appendChild(remove);



    return toDoContainer;
}