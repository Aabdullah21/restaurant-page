import './style.css'

function createContentDiv() {
    const content = document.createElement('div');
    content.id = 'content';
    return content;
}

function createHeader() {
    const header = document.createElement('ul');
    header.id = 'header';

    const homeTab = document.createElement('li');
    homeTab.classList.add('home-tab');

    const menuTab = document.createElement('li');
    menuTab.classList.add('menu-tab');

    const contactTab = document.createElement('li');
    contactTab.classList.add('contact-tab');

    header.appendChild(homeTab);
    header.appendChild(menuTab);
    header.appendChild(contactTab);

    return header;
}