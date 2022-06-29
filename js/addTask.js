setURL('https://sebastian-gamroth.developerakademie.net/smallest_backend_ever-master/');

let allTasksArray = [{}];

async function init() {
    await downloadFromServer();
    allTasksArray = JSON.parse(backend.getItem('allTasksArray')) || [];

    renderAvatar();
    backlogList();
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


    let task = {   // <-- wenn sich das array nennt..





        'title': title.value, // <-- wie nennt sich das hier ? 




        
        'names': names,
        'description': description.value,
        'category': category,
        'urgency': urgency,
        'createAt': new Date().getTime(),
        'backlog': true
    };


    title.value = '';
    description.value = '';

    allTasksArray.push(task);
    await backend.setItem('allTasksArray', JSON.stringify(allTasksArray));

    init();
}

let avatarArray = ['Bob_Marley', 'Lisa_Brennon', 'Mili_Vanilli', 'Ron_Stevens', 'Ula_Kockambrink', 'Wolf_Belford'];
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
            <a href="#" onclick="avatarSelect(${i})"><img src="../img/${avatarArray[i]}.png"></a>
            `;
    }
}


function dateFormatDE(index) {
    let options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    let date = new Date(index);
    date = date.toLocaleDateString('de-DE', options);
    return date;
}






// setTimeout(() => {
//     document.getElementById('datePicker').value = '2020-05-20'
// },10);