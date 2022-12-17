function appendToHome() {
    const home = createHomeDiv();
    const description = restaurantDescription();
    home.appendChild(description);

    return home;
}

function createHomeDiv() {
    const home = document.createElement('div');
    home.id = 'home-content';
    return home;
}

function restaurantDescription() {
    const description = document.createElement('h1');
    description.textContent = 'Welcome to our restaurant, here you will experience the best middle eastern food'
    description.classList.add('desc');
    return description;
}