function backlogList() {
    let task = document.getElementById('backlogList');
    task.innerHTML = '';

    for (let i = 0; i < users.length; i++) {
        task.innerHTML +=
            `
            <div class="task" id="task_${i}">
                <div>
                    <h2>${users[i].description}</h2>
                    <h2>${users[i].description}</h2>
                </div>
                <h2 id="task_${i}">${users[i].category}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, praesentium dolores iure nesciunt consectetur
                    veniam, sapiente impedit ipsa enim doloribus fuga eos nostrum blanditiis labore ipsum, qui perferendis aliquam
                    cupiditate.</p>
                <button class="btnBacklog" onclick="taskPushToBoard(${i})">
                    TO BOARD
                </button>
            </div>
            `;
    };
}