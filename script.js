let darkMode = document.querySelector ('#darkMode');

darkMode.onclick = () => {
    if (darkMode.classList.contains('bx-moon')){
        darkMode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('color');
    }else{
        darkMode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('color');
    }
}