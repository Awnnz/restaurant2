export default function about() {
    const content = document.querySelector('.content');
    const aboutContainer = document.createElement('div');
    aboutContainer.id = 'about-container';
 
   aboutContainer.innerHTML = 'About page Text'

   content.appendChild(aboutContainer);

   const pageLoad = document.createElement("div");
    pageLoad.className="pageLoad";

    content.appendChild(pageLoad);
  }