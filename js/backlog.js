function backlogList() {
    let task = document.getElementById('backlogList');
    task.innerHTML = '';

    for (let i = 1; i < allTasksArray.length; i++) {

        if (allTasksArray[i].backlog == true) {
            task.innerHTML +=
                `
            <div class="task" id="task_${i}">
                <div class="backlogTitle">
                    <img class="backlogImg" src="../img/${allTasksArray[i].names}.png">
                    <div>
                        <h2>${allTasksArray[i].names.replace('_', ' ')}</h2>
                        <h2>${allTasksArray[i].title}</h2>
                    </div>
                </div>
                <h2 id="task_${i}">${allTasksArray[i].category}</h2>
                <p>${allTasksArray[i].description}</p>
                <button class="btnBacklog" onclick="taskPushToBoard(${i})">
                    TO BOARD
                </button>
            </div>
            `;
        }
    };
}

async function taskPushToBoard(id) {
    allTasksArray[id].backlog = false;
    let element = document.getElementById('task_' + id);
    element.parentNode.removeChild(element);

    await backend.setItem('allTasksArray', JSON.stringify(allTasksArray));
}

// function deleteUser(name) {
//     backend.deleteItem('users');
//   }