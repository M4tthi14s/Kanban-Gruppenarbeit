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
    document.getElementById('searchTitle').classList.toggle('d-none');
}