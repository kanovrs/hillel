const btn = document.querySelector('.js-burger-btn');
const menu = document.querySelector('.js-header-menu');

btn.addEventListener('click', function() {
    menu.classList.toggle('active');
    btn.classList.toggle('close');
})
