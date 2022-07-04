function generateTodoHTML(element) {
    return `
            <div draggable="true" ondragstart="startDragging(${element['id']})" class="boardTask" style="background-color: ${element['color']};">
                <div id="toDoTask_${element['id']}">
                    <div draggable="true" class="note" id="task_${element['id']}">
                        <div class="titleBoard">
                            <div>
                                <h3 class="titleBoardFirst">Title:</h3>
                                <h2>${element['title']}</h2>
                            </div>
                            <div class="paperBinImg" id="paperBin_${element['id']}"></div> 
                        </div>
                        <h2 class="createAt">${element['createAt']}</h2>
                        <h2 class="categoryBoard" id="task_${element['id']}">${element['category']}</h2>
                        <h3 class="titleBoardSecond">Description:</h3>
                        <p>${element['description']}</p>
                        <div class="avatarContainerBoard" id="backlogAvatar_${element['id']}"></div>
                    </div>
                </div>
            </div>
            `
}
function renderAvatarPicFalse(index) {
    // console.log(index)
    let num
    for (let i = 0; i < allTasksArray.length; i++) {
        if (allTasksArray[i].id == index) {
            num = i;
        }
    }
    // if (allTasksArray[i].backlog == false) {
    // console.log(num)
    for (let j = 0; j < allTasksArray[num].names.length; j++) {

        document.getElementById('backlogAvatar_' + index).innerHTML +=
            `<div class="avatarPicTitleBord">
                    <img class="backlogImg" src="./img/${allTasksArray[num].names[j]}.png">
                    <h2>${letterName(num, j)}</h2>
                </div>`;
    }
    // }
}
// letterName(i,j)
// allTasksArray[num].names[j].replace('_', ' ')
function renderPaperBin(element, dell) {
    if (dell == false) {
        return `<img onclick="deleteNote(${element['id']})" src="./img/close.svg"></img>`;
        // return `<button onclick="deleteNote(${element['id']})">Dell</button>`;
    } else {
        return `<img onclick="paperBinNote(${element['id']})" src="./img/paperBin.png"></img>`;
        // return `<button onclick="paperBinNote(${element['id']})">Paperbin</button>`;
    }
}
// async function renderAfterBin(){
//  await downloadFromServer
// } 
function updateHTML() {
    let ifFalse = allTasksArray.filter(t => t['backlog'] == false);
    let toDo = ifFalse.filter(t => t['board'] == 'toDo');
    document.getElementById('toDo').innerHTML = '';

    for (let index = 0; index < toDo.length; index++) {
        const element = toDo[index];
        document.getElementById('toDo').innerHTML += generateTodoHTML(element);
        renderAvatarPicFalse(element['id']);
        document.getElementById('paperBin_' + element['id']).innerHTML = renderPaperBin(element);
    }

    let inProgress = ifFalse.filter(t => t['board'] == 'inProgress');
    document.getElementById('inProgress').innerHTML = '';
    for (let index = 0; index < inProgress.length; index++) {
        const element = inProgress[index];
        document.getElementById('inProgress').innerHTML += generateTodoHTML(element);
        renderAvatarPicFalse(element['id']);
        document.getElementById('paperBin_' + element['id']).innerHTML = renderPaperBin(element);
    }

    let testing = ifFalse.filter(t => t['board'] == 'testing');
    document.getElementById('testing').innerHTML = '';
    for (let index = 0; index < testing.length; index++) {
        const element = testing[index];
        document.getElementById('testing').innerHTML += generateTodoHTML(element);
        renderAvatarPicFalse(element['id']);
        document.getElementById('paperBin_' + element['id']).innerHTML = renderPaperBin(element);
    }

    let done = ifFalse.filter(t => t['board'] == 'done');
    document.getElementById('done').innerHTML = '';
    for (let index = 0; index < done.length; index++) {
        const element = done[index];
        document.getElementById('done').innerHTML += generateTodoHTML(element);
        renderAvatarPicFalse(element['id']);
        document.getElementById('paperBin_' + element['id']).innerHTML = renderPaperBin(element);
    }

    let trash = ifFalse.filter(t => t['board'] == 'trash');
    document.getElementById('trash').innerHTML = '';
    for (let index = 0; index < trash.length; index++) {
        const element = trash[index];
        document.getElementById('trash').innerHTML += generateTodoHTML(element);
        renderAvatarPicFalse(element['id']);
        let dell = false;
        document.getElementById('paperBin_' + element['id']).innerHTML = renderPaperBin(element, dell);
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
    for (let i = 0; i < allTasksArray.length; i++) {
        const content = allTasksArray[i].id;
       
        if (content == currentDraggedElement)
        allTasksArray[i]['board'] = board;
        pushToServer();
        updateHTML();
    }
 
}
function highlight(id) {
    document.getElementById(id).classList.add('box_Highlight')
}
function removeHighlight(id) {
    document.getElementById(id).classList.remove('box_Highlight')
}
function paperBinNote(position) {
    // console.log(position)
    let num;
    for (let i = 0; i < allTasksArray.length; i++) {
        if (allTasksArray[i].id == position) {
            num = i;
        }
    }
    // console.log(num)
    let index = "trash";
    allTasksArray[num]['board'] = index;
    pushToServer();
    updateHTML();
}
function deleteNote(position) {
    for (let i = 0; i < allTasksArray.length; i++) {
        if (allTasksArray[i].id == position) {
            allTasksArray.splice(i, 1);
        }
    }
    pushToServer();
    // downloadFromServer();
    updateHTML();
}
async function pushToServer() {
    await backend.setItem('allTasksArray', JSON.stringify(allTasksArray));
}