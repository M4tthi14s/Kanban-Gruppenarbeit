function backlogList() {
    let task = document.getElementById('backlogList');
    task.innerHTML = '';

    for (let i = 0; i < allTasksArray.length; i++) {

        if (allTasksArray[i].backlog == true) {
            task.innerHTML += renderBacklogList(i);
        }
        renderAvatarPicTrue(i);
    };
}


function renderBacklogList(i) {
    return `
            <div class="task" id="task_${i}" style="background-color: ${allTasksArray[i].color};">
                <div id="backlogAvatar_${i}" class="backlogTitle"></div>
                <div class="backlogAssignedTo"><h2>${allTasksArray[i].title}</h2></div>

                <div class="backlogCategory"><h2 id="task_${i}">${allTasksArray[i].category}</h2></div>
                <div class="backlogDetails"><p>${allTasksArray[i].description}</p></div>   
                <button class="btnBacklog" onclick="taskPushToBoard(${i})">
                    TO BOARD
                </button>
            </div>
            `;
}


function letterName(i, j) {
    // allTasksArray[i].names[j].replace('_', ' ')

    let fullNames = allTasksArray[i].names[j];
    let firstLetter = fullNames.charAt(0);
    let numberLetter = fullNames.indexOf('_');
    secondLetter = fullNames.charAt(numberLetter + 1);

    return `${firstLetter}. ${secondLetter}.`;
}


function renderAvatarPicTrue(i) {
    if (allTasksArray[i].backlog == true) {

        for (let j = 0; j < allTasksArray[i].names.length; j++) {
            document.getElementById('backlogAvatar_' + i).innerHTML +=
                `<div class="avatarPicTitle">
                    <img class="backlogImg" src="./img/${allTasksArray[i].names[j]}.png">
                    <h2>${letterName(i, j)}</h2>
                </div>`;
        }
    }
}


async function taskPushToBoard(id) {

    selectTaskPushToBoard(id);

    allTasksArray[id].backlog = false;
    let element = document.getElementById('task_' + id);
    element.parentNode.removeChild(element);

    await backend.setItem('allTasksArray', JSON.stringify(allTasksArray));
}


async function selectTaskPushToBoard(id) {
    for (let i = 0; i < allTasksArray.length; i++) {
        const content = allTasksArray[i];
        if (content == id) {
            allTasksArray[content].backlog = false;
            let element = document.getElementById('task_' + id);
            element.parentNode.removeChild(element);

            await backend.setItem('allTasksArray', JSON.stringify(allTasksArray));
        }
    }
}