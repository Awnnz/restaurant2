export default function home() {
  const content = document.querySelector('.content');
  const element = document.createElement('div');
  element.id = 'home';
  element.innerHTML = 'Welcome to the restaurant homepage!!!'
    
  content.appendChild(element);
  }