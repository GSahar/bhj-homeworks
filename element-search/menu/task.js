//Получаем все ссылки
let menuLinks = document.querySelectorAll('.menu__link');

for (let menuLink of menuLinks) {
    //Определяем есть ли элемент рядом с сылкой
    if (menuLink.nextElementSibling) {
        //назначаем событие при нажатии на пункт меню
        menuLink.onclick = function () {
            //Закрываем саб меню если где-то открыто
            if (closeMenu(menuLink.nextElementSibling)) {
                //отображаем саб меню
                menuLink.nextElementSibling.classList.add("menu_active");
            }

            //Не даем перейти по ссылке
            return false;
        }
    }

}

function closeMenu(subMenu) {
    let nextSubMenu = true;
    //Получаем все саб меню
    let menuSubs = document.querySelectorAll('.menu_sub');
    for (let menuSub of menuSubs) {

        //Если есть класс , удаляем
        if (menuSub.classList.contains("menu_active")) {
            menuSub.classList.remove("menu_active");
            // Eсли нажали на уже открытое меню, то не добавляем снова activ
            if (menuSub === subMenu) {
                nextSubMenu = false;
            }
        }
    }
    return nextSubMenu;
}
