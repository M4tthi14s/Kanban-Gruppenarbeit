function renderToDo() {
    let toDo = document.getElementById('toDo');


    for (let i = 0; i < allTasksArray.length; i++) {
        if (allTasksArray[i].backlog == false) {
            toDo.innerHTML +=
                `
        <div class="note" id="task_${i}"
            <div>
            <h2>${allTasksArray[i].title}</h2>
                <h2>${allTasksArray[i].names}</h2>
                
                <h2 id="task_${i}">${allTasksArray[i].category}</h2>
                <p>${allTasksArray[i].description}</p>
                <button onclick="deleteNote" >Löschen</button>
            </div>
           
        </div>
   
        `
        }
    }
}


function updateHTML(){
    let toDO = allTasksArray.filter(t =>['categorty'] == 'toDO')
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
    let testing = allTaskArray.filter(t=>t['category']== 'testing');
    document.getElementById('testing').innerHTML= '';
    for (let index = 0; index < testing.length; index++) {
        const element =testing[index];
        document.getElementById('testing').innerHTML += renderToDo(element)
        
    }
    let done = allTaskArray.filter(t=>t['category']== 'done');
    document.getElementById('done').innerHTML= '';
    for (let index = 0; index < done.length; index++) {
        const element = done[index];
        document.getElementById('done').innerHTML += renderToDo(element)
        
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
