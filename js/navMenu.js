function menuLink(index) {

    let menuLinkArray = ['headlineBody', 'board', 'backlog', 'addTask', 'howTo', 'copyright', "imprint", "privacy"];
    menuLinkArray.splice(menuLinkArray.indexOf(index), 1);

    showLink(index);
    hideLink(menuLinkArray);
}


function showLink(index) {
    document.getElementById(index).style.display = 'flex';
    if (index == 'board' || index == 'backlog') { document.getElementById('searchTitle').style.display = 'flex'; }
    else { document.getElementById('searchTitle').style.display = 'none'; }
    if (index == 'board') { document.getElementById('paperBin').style.display = 'flex'; }
    else { document.getElementById('paperBin').style.display = 'none'; }
}


function hideLink(menuLinkArray) {
    menuLinkArray.forEach(element => { document.getElementById(element).style.display = 'none'; });
}


function navBar() {
    document.getElementById('regulations').classList.toggle('d-none');
    document.getElementById('menuSelection').classList.toggle('d-none');
    document.getElementById('hideSearchTitle').classList.toggle('d-none');
    document.getElementById('hidePaperBin').classList.toggle('d-none');
}


function paperBin() {
    // document.getElementById('toDoPage').classList.toggle('d-none');
    // document.getElementById('inProgressPage').classList.toggle('d-none');
    // document.getElementById('testingPage').classList.toggle('d-none');
    // document.getElementById('donePage').classList.toggle('d-none');
    // document.getElementById('trashPage').classList.toggle('d-none');

    document.getElementById('boardContainer').classList.toggle('d-none');
    document.getElementById('trashContainer').classList.toggle('d-none');
}




function searchTitle() {
    let search = document.getElementById('searchTitle').value;
    search = search.toLowerCase();

    let list = document.getElementById('outputSearch');
    list.innerHTML = '';

    for (let i = 1; i < allTasksArray.length; i++) {
        
        const currentItem = allTasksArray[i].title.toLowerCase();
        
        if (currentItem.toLowerCase().includes(search) && search.length > 0) {
            list.innerHTML +=
                `
                <ul><a onclick="closeSearch()" href="#jump${i}">${currentItem}</a></ul>
                `;
                console.log(currentItem)
        }
      

        if (search.length < 0) {
            document.getElementById('outputSearch').innerHTML = '';
            document.getElementById('searchInput').value = '';
        }


    };
}

