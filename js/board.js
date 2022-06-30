function renderToDo() {
    let toDo = document.getElementById('toDo');
    toDo.innerHTML = '';

    for (let i = 0; i < allTasksArray.length; i++) {
        if (allTasksArray[i].backlog == false) {
            toDo.innerHTML +=
                `
                <div id="toDO">
                <div draggable="true" class="note" id="task_${i}"
                     <h2 id="backlogAvatar_${i}">${allTasksArray[i].title}</h2>
                     <div id="backlogAvatar_${i}"></div>
                    
                    <h2 id="task_${i}">${allTasksArray[i].category}</h2>
                    <p>${allTasksArray[i].description}</p>
                    <button onclick="deleteNote(${i})" >Löschen</button>
                </div>
               
            </div>
        `
        }
        renderAvatarPicFalse(i);
    }
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

{/* <div>
<img src="../img/${i}.png">
</div> */}




// function renderAvatarPic(i) {
//     if (allTasksArray[i].backlog == true) {

//         for (let j = 0; j < allTasksArray[i].names.length; j++) {

//             document.getElementById('backlogAvatar_' + i).innerHTML +=
//                 `<div class="avatarPicTitle">
//                     <img class="backlogImg" src="../img/${allTasksArray[i].names[j]}.png">
//                     <h2>${allTasksArray[i].names[j].replace('_', ' ')}</h2>
//                 </div>`;
//         }

//     }
// }



function updateHTML() {
    let toDO = allTasksArray.filter(t => ['categorty'] == 'toDO')
    document.getElementById('toDO').innerHTML = '';

    for (let index = 0; index < allTaskArray.length; index++) {
        const element = allTaskArray[index];
        document.getElementById('toDO').innerHTML += renderToDo(element)

    }


    let inProgress = allTaskArray.filter(t => t['category'] == 'inProgress');
    document.getElementById('inProgress').innerHTML = '';
    for (let index = 0; index < inProgress.length; index++) {
        const element = inProgress[index];

        document.getElementById('inProgress').innerHTML += renderToDo(element)

    }
    let testing = allTaskArray.filter(t => t['category'] == 'testing');
    document.getElementById('testing').innerHTML = '';
    for (let index = 0; index < testing.length; index++) {
        const element = testing[index];
        document.getElementById('testing').innerHTML += renderToDo(element)

    }
    let done = allTaskArray.filter(t => t['category'] == 'done');
    document.getElementById('done').innerHTML = '';
    for (let index = 0; index < done.length; index++) {
        const element = done[index];
        document.getElementById('done').innerHTML += renderToDo(element)

    }
}
let currentDraggedElement;



function startDragging(id) {
    let currentDraggedElement = id;

}

function allowDrop(ev) {
    ev.preventDefault();

}

function moveTo(category) {
    todos[currentDraggedElement]['category'] = category;
    updateHTML();

}




//aus Array löschen//

function deleteNote(position) {
    allTasksArray.splice(position, 1)

    renderToDo();
}