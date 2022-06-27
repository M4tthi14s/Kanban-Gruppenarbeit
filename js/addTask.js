// setURL('http://developerakademie.com/smallest_backend_ever');
setURL('https://sebastian-gamroth.developerakademie.net/smallest_backend_ever-master/');

let users = [{}];

async function init() {
    await downloadFromServer();
    users = JSON.parse(backend.getItem('users')) || [];

    // addTask();
    loadAllTasks();

}

let allTasks = [];

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

    allTasks.push(task);

    users.push(task);
    await backend.setItem('users', JSON.stringify(users));

    // let allTasksAsString = JSON.stringify(allTasks);
    // localStorage.setItem('allTasks', allTasksAsString);

    // console.log('push ' + allTasks);
}



/**
 * loads all tasks
 * @param {String} email - test
 */
function loadAllTasks() {
    // let allTasksAsString = localStorage.getItem('allTasks');
    // allTasks = JSON.parse(allTasksAsString);

    // console.log('load ' + allTasks);


    allTasks.push(users);
}