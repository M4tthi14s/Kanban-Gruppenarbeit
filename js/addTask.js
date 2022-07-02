setURL('https://sebastian-gamroth.developerakademie.net/smallest_backend_ever-master/');

let allTasksArray = [{}];

async function init() {
    await downloadFromServer();
    allTasksArray = JSON.parse(backend.getItem('allTasksArray')) || [];

    
    backlogList();
    // renderToDo();
    // setTimeout();
}


function formValidationAddTask() {
    addTask();
}

/**
 * adds tasks in array
 */
async function addTask() {
    let title = document.getElementById('title');
    let description = document.getElementById('description');
    let category = document.getElementById('category').value;
    let urgency = document.getElementById('urgency').value;

    let id;
    if (!allTasksArray[1]) { id = 1 }
    else {
        let number = allTasksArray.length;
        number = number - 1;
        let index = allTasksArray[number].id
        id = (index) + 1;
    }

    let task = {
        'title': title.value,
        'names': names,
        'description': description.value,
        'category': category,
        'urgency': urgency,
        'createAt': dateFormatDE(),
        'backlog': true,
        'id': id,
        'board': 'toDo'
    };

    title.value = '';
    description.value = '';
    names = [];

    allTasksArray.push(task);
    await backend.setItem('allTasksArray', JSON.stringify(allTasksArray));

    init();
    renderAvatar();
}


let avatarArray = ['Bob_Marley', 'Lisa_Brennon', 'Mili_Vanilli', 'Ron_Stevens', 'Ula_Kockambrink', 'Wolf_Belford'];
let names = [];

function avatarSelect(index) {
    document.getElementById(index).classList.toggle('avatarAddTaskToggle');

    if (names.includes(avatarArray[index])) {
        names = names.filter(a => a != avatarArray[index]);
    } else {
        names.push(avatarArray[index]);
    }


    if (names.length == 0) {
        document.getElementById('checkbox').setAttribute("required", "");  
    }

    if (names.length > 0) {
        document.getElementById('checkbox').removeAttribute('required');
    }
}


function renderAvatar() {
    let avatar = document.getElementById('renderAvatar');
    avatar.innerHTML = '';
    for (let i = 0; i < avatarArray.length; i++) {
        avatar.innerHTML +=
            `
            <a href="#" onclick="avatarSelect(${i})"><img id="${i}" src="../img/${avatarArray[i]}.png"></a>
            `;
    }
    avatar.innerHTML += '<input id="checkbox" class="checkbox_round" required type="checkbox"></input>';
}


function dateFormatDE() {
    let options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    let date = new Date();
    date = date.toLocaleDateString('de-DE', options);
    return date;
}