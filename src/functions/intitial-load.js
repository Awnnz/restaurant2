import header from '../pages/header';
import mainPage from '../pages/main-page';
import pageLoad from './page-load';

export default function initialLoad() {
    const content = document.querySelector('.content');
    content.appendChild(header());
    mainPage();
    pageLoad();
};