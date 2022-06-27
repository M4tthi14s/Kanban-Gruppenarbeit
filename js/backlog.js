function backlogList() {
    let task = document.getElementById('backlogList');
    task.innerHTML = '';

    for (let i = 0; i < users.length; i++) {
        task.innerHTML +=
            `
                        <li id="task_${i}">${users[i].description}</li>
                        <li id="task_${i}">${users[i].category}</li>
                        <li id="task_${i}">${users[i].createAt}</li>
                        `;
    };
}