import header from '../pages/header';
import mainPage from '../pages/main-page';

export default function initialLoad() {
    const content = document.querySelector('.content');
    content.appendChild(header());
    content.appendChild(mainPage());
};