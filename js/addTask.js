setURL('https://sebastian-gamroth.developerakademie.net/smallest_backend_ever-master/');

let allTasksArray = [{}];

async function init() {
    await downloadFromServer();
    allTasksArray = JSON.parse(backend.getItem('allTasksArray')) || [];

    renderAvatar();
    backlogList();
}

let ifValidation = false;

function formValidationAddTask() {
    ifValidation = true;
    console.log(ifValidation)
}

/**
 * adds tasks in array
 */
async function addTask() {
    if (ifValidation == true) {console.log('true');ifValidation = false;}
    if (ifValidation == true) {console.log('false')}

    // if (ifValidation == blue) {
    //     console.log(ifValidation)

        let title = document.getElementById('title');
        let description = document.getElementById('description');
        let category = document.getElementById('category').value;
        let urgency = document.getElementById('urgency').value;

        let task = {

            'title': title.value,
            'names': names,
            'description': description.value,
            'category': category,
            'urgency': urgency,
            'createAt': dateFormatDE(),
            'backlog': true
        };

        title.value = '';
        description.value = '';

        allTasksArray.push(task);
        await backend.setItem('allTasksArray', JSON.stringify(allTasksArray));

        init();

        ifValidation = false;
    // }
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


function dateFormatDE() {
    let options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    let date = new Date();
    date = date.toLocaleDateString('de-DE', options);
    return date;
}