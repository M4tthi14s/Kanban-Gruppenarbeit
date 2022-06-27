function menuLink(index) {

    let menuLinkArray = ['board', 'backlog', 'addTask', 'howTo'];
    menuLinkArray.splice(menuLinkArray.indexOf(index), 1);

    showLink(index);
    hideLink(menuLinkArray);
}


function showLink(index) {
    document.getElementById(index).classList.remove('d-none');
}


function hideLink(menuLinkArray) {
    menuLinkArray.forEach(element => {
        document.getElementById(element).classList.add('d-none');
    });
}