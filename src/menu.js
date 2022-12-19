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
                    <h2>18.99$</h2>

                </div>
                <hr />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eos soluta quas necessitatibus, quibusdam incidunt fugit aperiam fuga ut aliquam nulla quidem, accusamus quis. Atque consectetur reprehenderit rerum necessitatibus itaque?</p>
            </div>
            <div class="card">
                <div class="info">
                    <h2>Shakshuka</h2>
                    <h2>18.99$</h2>
                </div>
                <hr />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eos soluta quas necessitatibus, quibusdam incidunt fugit aperiam fuga ut aliquam nulla quidem, accusamus quis. Atque consectetur reprehenderit rerum necessitatibus itaque?</p>
            </div>
            <div class="card">
                <div class="info">
                    <h2>Shakshuka</h2>
                    <h2>18.99$</h2>
                </div>
                <hr />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eos soluta quas necessitatibus, quibusdam incidunt fugit aperiam fuga ut aliquam nulla quidem, accusamus quis. Atque consectetur reprehenderit rerum necessitatibus itaque?</p>
            </div>
            <div class="card">
                <div class="info">
                    <h2>Shakshuka</h2>
                    <h2>18.99$</h2>
                </div>
                <hr />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eos soluta quas necessitatibus, quibusdam incidunt fugit aperiam fuga ut aliquam nulla quidem, accusamus quis. Atque consectetur reprehenderit rerum necessitatibus itaque?</p>
            </div>
            <div class="card">
                <div class="info">
                    <h2>Shakshuka</h2>
                    <h2>18.99$</h2>
                </div>
                <hr />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eos soluta quas necessitatibus, quibusdam incidunt fugit aperiam fuga ut aliquam nulla quidem, accusamus quis. Atque consectetur reprehenderit rerum necessitatibus itaque?</p>
            </div>
            <div class="card">
                <div class="info">
                    <h2>Shakshuka</h2>
                    <h2>18.99$</h2>
                </div>
                <hr />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eos soluta quas necessitatibus, quibusdam incidunt fugit aperiam fuga ut aliquam nulla quidem, accusamus quis. Atque consectetur reprehenderit rerum necessitatibus itaque?</p>
            </div>
        </div>`;
    return menu;
}