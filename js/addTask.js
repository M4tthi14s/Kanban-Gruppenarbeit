setURL('https://sebastian-gamroth.developerakademie.net/smallest_backend_ever-master/');

let allTasksArray = [{}];

async function init() {
    await downloadFromServer();
    allTasksArray = JSON.parse(backend.getItem('allTasksArray')) || [];

    backlogList();
}


/**
 * adds tasks in array
 */
async function addTask() {
    let description = document.getElementById('description').value;
    let category = document.getElementById('category').value;

    let task = {
        'description': description,
        'category': category,
        'createAt': new Date().getTime()
    };

    allTasksArray.push(task);
    await backend.setItem('allTasksArray', JSON.stringify(allTasksArray));
}