setURL('https://sebastian-gamroth.developerakademie.net/smallest_backend_ever-master/');

let allTasksArray = [{}];

async function init() {
    await downloadFromServer();
    allTasksArray = JSON.parse(backend.getItem('allTasksArray')) || [];

    renderAvatar();
    backlogList();
}


/**
 * adds tasks in array
 */
async function addTask() {
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let category = document.getElementById('category').value;
    let urgency = document.getElementById('urgency').value;

    let task = {
        'title': title,
        'names': names,
        'description': description,
        'category': category,
        'urgency': urgency,
        'createAt': new Date().getTime()
    };

    allTasksArray.push(task);
    await backend.setItem('allTasksArray', JSON.stringify(allTasksArray));

    init();
}

let avatarArray = ['Bob', 'Lisa', 'Mili', 'Ron', 'Ula', 'Wolf'];
let names = [];

function avatarSelect(index) {
    names = avatarArray[index];
}

function renderAvatar() {
    let avatar = document.getElementById('renderAvatar');
    avatar.innerHTML = '';
    for (let i = 0; i < avatarArray.length; i++) {
        avatar.innerHTML +=
            `
            <a href="#" onclick="avatarSelect(${i})"><img src="../img/profile_${avatarArray[i]}.png"></a>
            `;
    }
}

setTimeout(() => {
    document.getElementById('datePicker').value = '2020-05-20'
},10);
