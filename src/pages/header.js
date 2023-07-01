import shiba from './../assets/images/shiba.jpg';
import clear from './../functions/clear-page';
import addHome from './main-page';
import addMenu from './menu';
import addAbout from './about';


const headerDiv = function() {
    const content = document.querySelector('.content');
    const header = document.createElement('div');
    header.id = 'header';

    const logo = document.createElement('img');
    logo.id = 'logo'
    logo.src = shiba;
    header.appendChild(logo);

    const menu = document.createElement('div');
    menu.id = 'menu';
    menu.innerHTML = 'Menu';
    header.appendChild(menu);

    const about = document.createElement('div');
    about.id = 'about';
    about.innerHTML = 'About';
    header.appendChild(about);

    logo.addEventListener('click', () => {
        clear();
        content.appendChild(header);
        addHome();
    })

    menu.addEventListener('click', () => {
        clear();
        content.appendChild(header);
        addMenu();
    })

    about.addEventListener('click', () => {
        clear();
        content.appendChild(header);
        addAbout();
    })

    return header;
};

export default headerDiv;