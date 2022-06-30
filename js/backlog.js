function backlogList() {
    let task = document.getElementById('backlogList');
    task.innerHTML = '';

    for (let i = 1; i < allTasksArray.length; i++) {

        if (allTasksArray[i].backlog == true) {
            task.innerHTML +=
                `
            <div class="task" id="task_${i}">
                <div id="backlogAvatar_${i}" class="backlogTitle"></div>
                <div id="backlogNames_${i}"><h2>${allTasksArray[i].title}</h2></div>

                <h2 id="task_${i}">${allTasksArray[i].category}</h2>
                <p>${allTasksArray[i].description}</p>
                <button class="btnBacklog" onclick="taskPushToBoard(${i})">
                    TO BOARD
                </button>
            </div>
            `;
        }
        renderAvatarPicTrue(i);
    };
}


function renderAvatarPicTrue(i) {
    if (allTasksArray[i].backlog == true) {

        for (let j = 0; j < allTasksArray[i].names.length; j++) {

            document.getElementById('backlogAvatar_' + i).innerHTML +=
                `<div class="avatarPicTitle">
                    <img class="backlogImg" src="../img/${allTasksArray[i].names[j]}.png">
                    <h2>${allTasksArray[i].names[j].replace('_', ' ')}</h2>
                </div>`;
        }
    }
}


async function taskPushToBoard(id) {
    allTasksArray[id].backlog = false;
    let element = document.getElementById('task_' + id);
    element.parentNode.removeChild(element);

    await backend.setItem('allTasksArray', JSON.stringify(allTasksArray));
}