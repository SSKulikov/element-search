let menuLinkList = [...document.querySelectorAll('.menu__link')]
let menuItemList = [...document.querySelectorAll('.menu__item')]

menuLinkList.forEach((el) => {
    el.addEventListener('click', (event) => {
        let givenElement = el.closest('.menu__item').querySelector('.menu_sub')
        if (givenElement) {
            event.preventDefault()
            if (givenElement.className.includes('menu_active')) {
                givenElement.classList.remove('menu_active')
            } else {
                menuItemList.forEach((element) => {
                    if (element.querySelector('.menu_active')) {
                        element.querySelector('.menu_sub').classList.remove('menu_active');
                        }
                    });
                givenElement.classList.add('menu_active')
            }
        }
    })
})