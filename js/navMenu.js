function menuLink(index) {

    let menuLinkArray = ['headlineBody', 'board', 'backlog', 'addTask', 'howTo', 'copyright', "imprint", "privacy"];
    menuLinkArray.splice(menuLinkArray.indexOf(index), 1);

    showLink(index);
    hideLink(menuLinkArray);
}


function showLink(index) {
    // document.getElementById(index).classList.remove('d-none');
    document.getElementById(index).style.display='flex';
}


function hideLink(menuLinkArray) {
    menuLinkArray.forEach(element => {
        // document.getElementById(element).classList.add('d-none');
        document.getElementById(element).style.display='none';
    });
}