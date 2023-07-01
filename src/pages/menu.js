export default function menu() {
    const content = document.querySelector('.content');
    const menuContainer = document.createElement('div');
    menuContainer.id = 'menu-container';
 
   const list = document.createElement('ul');
   menuContainer.appendChild(list);

   const menuItemCount = 3;
   const menuItems = [];
   for (let i = 0; i < menuItemCount; i ++) {
    menuItems[i] = document.createElement('li');
    list.appendChild(menuItems[i]);
   }

   addItemNames('Blueberry Pie', 'Steak', 'Chicken');
   
   function addItemNames(...items) {
    for (let i = 0; i < items.length; i++) {
        menuItems[i].textContent = items[i];
    }
   }



   content.appendChild(menuContainer);
  }