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

avatarArray = ['Bob','Lisa','Mili','Ron','Ula','Wolf'];

function renderAvatar() {
    let avatar = document.getElementById('renderAvatar');
    avatar.innerHTML = '';
    for (let i = 0; i < avatarArray.length; i++) {
        avatar.innerHTML +=
            `
            <a href="#" onclick="avatarSelect()"><img src="../img/profile_${avatarArray[i]}.png"></a>
            `;
    }
}