import './style.css'
import home from './home';
import menu from './menu';
import contact from './contact';

const homeContent = home();
const menuContent = menu();
const contactContent = contact();
let currentTab = homeContent;

(function startWebsite() {
    const body = document.querySelector('body');
    const content = createContentDiv();
    const header = createHeader();
    content.appendChild(header);
    content.appendChild(homeContent);
    body.appendChild(content);
    switchTabs();
})();

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
    homeTab.textContent = 'Home';
    homeTab.style.color = '#10b981';

    const menuTab = document.createElement('li');
    menuTab.classList.add('menu-tab');
    menuTab.textContent = 'Menu';

    const contactTab = document.createElement('li');
    contactTab.classList.add('contact-tab');
    contactTab.textContent = 'Contact';

    header.appendChild(homeTab);
    header.appendChild(menuTab);
    header.appendChild(contactTab);

    return header;
}

function switchTabs() {
    const [homeTab, menuTab, contactTab] = document.querySelectorAll('li');
    homeTab.addEventListener('click', function () {
        removeTabContent(currentTab);
        resetColors();

        currentTab = homeContent;
        homeTab.style.color = '#10b981';

        appendToContent(currentTab);
    })

    menuTab.addEventListener('click', function () {
        removeTabContent(currentTab);
        resetColors();

        currentTab = menuContent;
        menuTab.style.color = '#10b981';

        appendToContent(currentTab);
    })

    contactTab.addEventListener('click', function () {
        removeTabContent(currentTab);
        resetColors();

        currentTab = contactContent;
        contactTab.style.color = '#10b981';

        appendToContent(currentTab);
    })

}

function removeTabContent(tab) {
    const content = document.getElementById('content');
    content.removeChild(tab);
}

function appendToContent(tab) {
    const content = document.getElementById('content');
    content.appendChild(tab);
}

function resetColors() {
    const tabs = document.querySelectorAll('li');
    tabs.forEach((elem) => elem.style.color = 'white');
}