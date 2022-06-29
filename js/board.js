function renderToDo() {
    let toDo = document.getElementById('toDo');


    for (let i = 0; i < allTasksArray.length; i++) {
        if (allTasksArray[i].backlog == false) {
            toDo.innerHTML +=
                `
        <div class="note" id="task_${i}"
            <div>
                <h2>${allTasksArray[i].names}</h2>
                <h2>${allTasksArray[i].title}</h2>
            </div>
        </div>
        <h2 id="task_${i}">${allTasksArray[i].category}</h2>
        <p>${allTasksArray[i].description}</p>
        `
        }
    }
}










let currentDraggedElement;



function startDragging() {
    let currentDraggedElement = id;

}

function allowDrop(ev) {
    ev.preventDefault();

}

function moveTo(category) {
    todos[currentDraggedElement]['category'] = category;
    updateHTML();

}
