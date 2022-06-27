let allTasks = [];


function addTask() {
    let description = document.getElementById('description').value;
    let category = document.getElementById('category').value;

    let task = {
        'description': description,
        'category': category,
        'createAt': new Date().getTime()
    };

    allTasks.push(task);

    let allTasksAsString = JSON.stringify(allTasks);
    localStorage.setItem('allTasks', allTasksAsString);

    console.log('push ' + allTasks);
}


function loadAllTasks() {
    let allTasksAsString = localStorage.getItem('allTasks');
    allTasks = JSON.parse(allTasksAsString);

    console.log('load ' + allTasks);

}