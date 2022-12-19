function createMenuDiv() {
    const menu = document.createElement('div');
    menu.id = 'menu-content';
    return menu;
}

export default function appendToMenu() {
    const menu = createMenuDiv();
    menu.innerHTML =
        `<div class="container">
            <div class="card">
                <div class="info">
                    <h2>Shakshuka</h2>
                    <h2>3.99$</h2>

                </div>
                <hr />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eos soluta quas necessitatibus, quibusdam incidunt fugit aperiam fuga ut aliquam nulla quidem, accusamus quis. Atque consectetur reprehenderit rerum necessitatibus itaque?</p>
            </div>
            <div class="card">
                <div class="info">
                    <h2>Kabsa</h2>
                    <h2>9.99$</h2>
                </div>
                <hr />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eos soluta quas necessitatibus, quibusdam incidunt fugit aperiam fuga ut aliquam nulla quidem, accusamus quis. Atque consectetur reprehenderit rerum necessitatibus itaque?</p>
            </div>
            <div class="card">
                <div class="info">
                    <h2>Shawarma</h2>
                    <h2>2.99$</h2>
                </div>
                <hr />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eos soluta quas necessitatibus, quibusdam incidunt fugit aperiam fuga ut aliquam nulla quidem, accusamus quis. Atque consectetur reprehenderit rerum necessitatibus itaque?</p>
            </div>
            <div class="card">
                <div class="info">
                    <h2>Kebab</h2>
                    <h2>4.99$</h2>
                </div>
                <hr />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eos soluta quas necessitatibus, quibusdam incidunt fugit aperiam fuga ut aliquam nulla quidem, accusamus quis. Atque consectetur reprehenderit rerum necessitatibus itaque?</p>
            </div>
            <div class="card">
                <div class="info">
                    <h2>Hummus</h2>
                    <h2>1.99$</h2>
                </div>
                <hr />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eos soluta quas necessitatibus, quibusdam incidunt fugit aperiam fuga ut aliquam nulla quidem, accusamus quis. Atque consectetur reprehenderit rerum necessitatibus itaque?</p>
            </div>
            <div class="card">
                <div class="info">
                    <h2>Halal hampburger</h2>
                    <h2>3.99$</h2>
                </div>
                <hr />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eos soluta quas necessitatibus, quibusdam incidunt fugit aperiam fuga ut aliquam nulla quidem, accusamus quis. Atque consectetur reprehenderit rerum necessitatibus itaque?</p>
            </div>
        </div>`;
    return menu;
}