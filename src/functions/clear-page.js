const clear = function(){
    const content = document.querySelector('.content');
    
    while (content.children.length > 0) {
        content.children[0].remove();
    }
}

export default clear;