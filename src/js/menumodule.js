export default function menuModule() {
    const hamburger = document.querySelector('.menu__hamburger');
    const menuList = document.querySelector('.menu__list');

    hamburger.classList.remove('menu__hamburger--active');
    menuList.classList.remove('menu__list--active');

    hamburger.addEventListener('click', () => {
        if (hamburger.classList.contains('menu__hamburger--active')) {
            hamburger.classList.remove('menu__hamburger--active');
            menuList.classList.remove('menu__list--active');
        } else {
            hamburger.classList.add('menu__hamburger--active');
            menuList.classList.add('menu__list--active');
        }

    });
}

