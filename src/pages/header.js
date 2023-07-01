import shiba from './../assets/images/shiba.jpg';
import clear from './../functions/clear-page';
import addHome from './main-page';
import addMenu from './menu';
import addAbout from './about';
import pageLoad from '../functions/page-load';


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
        pageLoad();
    })

    menu.addEventListener('click', () => {
        clear();
        content.appendChild(header);
        addMenu();
        pageLoad();
    })

    about.addEventListener('click', () => {
        clear();
        content.appendChild(header);
        addAbout();
        pageLoad();
    })

    return header;
};

export default headerDiv;