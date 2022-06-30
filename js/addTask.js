setURL('https://sebastian-gamroth.developerakademie.net/smallest_backend_ever-master/');

let allTasksArray = [{}];

async function init() {
    await downloadFromServer();
    allTasksArray = JSON.parse(backend.getItem('allTasksArray')) || [];

    renderAvatar();
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
}


let avatarArray = ['Bob_Marley', 'Lisa_Brennon', 'Mili_Vanilli', 'Ron_Stevens', 'Ula_Kockambrink', 'Wolf_Belford'];
let names = [];

function avatarSelect(index) {
    names = [];
    document.getElementById(index).classList.toggle('avatarAddTaskToggle');

    if (names.includes(avatarArray[index])) {
        names = names.filter(a => a != avatarArray[index]);
    } else {
        names.push(avatarArray[index]);
    }


    if (names.length == 0) {

    }
    if (names.length > 0) {

        document.getElementById('checkbox0').removeAttribute('required');
        document.getElementById('checkbox1').removeAttribute('required');
        document.getElementById('checkbox2').removeAttribute('required');
        document.getElementById('checkbox3').removeAttribute('required');
        document.getElementById('checkbox4').removeAttribute('required');
        document.getElementById('checkbox5').removeAttribute('required');

    }


}


function renderAvatar() {
    let avatar = document.getElementById('renderAvatar');
    avatar.innerHTML = '';
    for (let i = 0; i < avatarArray.length; i++) {
        avatar.innerHTML +=
            `
            <a href="#" onclick="avatarSelect(${i})"><input id="checkbox${i}" class="checkbox_round" required type="checkbox"></input><img id="${i}" src="../img/${avatarArray[i]}.png"></a>
            `;
    }
}
{/* <input class="checkbox_round" required type="checkbox"></input> */ }

function dateFormatDE() {
    let options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    let date = new Date();
    date = date.toLocaleDateString('de-DE', options);
    return date;
}




// $(document).ready(function () {
//     var checkbox_round = $('.checkbox_round');
//     checkbox_round.change(function () {
//         if ($('.checkbox_round:checked').length > 0) {
//             checkbox_round.removeAttr('required');
//         } else {
//             checkbox_round.attr('required', 'required');
//         }
//     });
// });

// async function checkForm() {
//     $(function () {
//         let requiredCheckboxes = $('.avatarContainer :checkbox[required]');
//         requiredCheckboxes.change(function () {
//             if (requiredCheckboxes.is(':checked')) {
//                 requiredCheckboxes.removeAttr('required');
//             } else {
//                 requiredCheckboxes.attr('required', 'required');
//             }
//         });
//     });
// }