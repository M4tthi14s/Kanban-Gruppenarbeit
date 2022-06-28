function backlogList() {
    let task = document.getElementById('backlogList');
    task.innerHTML = '';

    for (let i = 1; i < allTasksArray.length; i++) {

        if (allTasksArray[i].backlog == true) {
            task.innerHTML +=
                `
            <div class="task" id="task_${i}">
                <div>
                    <h2>${allTasksArray[i].names}</h2>
                    <h2>${allTasksArray[i].title}</h2>
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

function taskPushToBoard(id) {
    allTasksArray[id].backlog = false;
    document.getElementById('task_' + id).innerHTML = "";

}

// function deleteUser(name) {
//     backend.deleteItem('users');
//   }