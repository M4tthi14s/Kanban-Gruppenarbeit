function generateTodoHTML(element) {

    return `
            <div draggable="true" ondragstart="startDragging(${element['id']})" class="todo">${element['title']}
                <div id="toDoTask_${element['id']}">
                    <div draggable="true" class="note" id="task_${element['id']}">
                        <h2>${element['title']}</h2>
                        <div id="backlogAvatar_${element['id']}"></div>

                        <h2 id="task_${element['id']}">${element['category']}</h2>
                        <p>${element['description']}</p>
                        <button onclick="deleteNote(${element['id']})">Löschen</button>
                    </div>
                </div>
            </div>
            `
}


function renderAvatarPicFalse(i) {
    if (allTasksArray[i].backlog == false) {

        for (let j = 0; j < allTasksArray[i].names.length; j++) {

            document.getElementById('backlogAvatar_' + i).innerHTML +=
                `<div class="avatarPicTitle">
                    <img class="backlogImg" src="../img/${allTasksArray[i].names[j]}.png">
                    <h2>${allTasksArray[i].names[j].replace('_', ' ')}</h2>
                </div>`;
        }
    }
}


function updateHTML() {

    let toDo = allTasksArray.filter(t => t['board'] == 'toDo');
    document.getElementById('toDo').innerHTML = '';
    for (let index = 0; index < toDo.length; index++) {
        const element = toDo[index];
        document.getElementById('toDo').innerHTML += generateTodoHTML(element);
        renderAvatarPicFalse(element['id']);
    }

    let inProgress = allTasksArray.filter(t => t['board'] == 'inProgress');
    document.getElementById('inProgress').innerHTML = '';
    for (let index = 0; index < inProgress.length; index++) {
        const element = inProgress[index];
        document.getElementById('inProgress').innerHTML += generateTodoHTML(element);
        renderAvatarPicFalse(element['id']);
    }

    let testing = allTasksArray.filter(t => t['board'] == 'testing');
    document.getElementById('testing').innerHTML = '';
    for (let index = 0; index < testing.length; index++) {
        const element = testing[index];
        document.getElementById('testing').innerHTML += generateTodoHTML(element);
        renderAvatarPicFalse(element['id']);
    }

    let done = allTasksArray.filter(t => t['board'] == 'done');
    document.getElementById('done').innerHTML = '';
    for (let index = 0; index < done.length; index++) {
        const element = done[index];
        document.getElementById('done').innerHTML += generateTodoHTML(element);
        renderAvatarPicFalse(element['id']);
    }

    let trash = allTasksArray.filter(t => t['board'] == 'trash');
    document.getElementById('trash').innerHTML = '';
    for (let index = 0; index < trash.length; index++) {
        const element = trash[index];
        document.getElementById('trash').innerHTML += generateTodoHTML(element);
        renderAvatarPicFalse(element['id']);
    }
}

let currentDraggedElement;


function startDragging(id) {
    currentDraggedElement = id;
}


function allowDrop(ev) {
    ev.preventDefault();
}


function moveTo(board) {
    allTasksArray[currentDraggedElement]['board'] = board;
    updateHTML();
}


function highlight(id) {
    document.getElementById(id).classList.add('box_Highlight')
}


function removeHighlight(id) {
    document.getElementById(id).classList.remove('box_Highlight')
}


function deleteNote(position) {
    allTasksArray.splice(position, 1)

    updateHTML();
}