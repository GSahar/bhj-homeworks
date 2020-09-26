//Список пунктов меню
let listTabMenu = Array.from(document.querySelectorAll(".tab"));
//Список контента
let listContents = Array.from(document.querySelectorAll(".tab__content"));

for (let i = 0; i < listTabMenu.length; i++) {
    listTabMenu[i].onclick = function () {
        // Ищем активный пункт меню
        let activElementMenu = document.querySelector(".tab_active");
        activElementMenu.classList.remove("tab_active");
        //Ищем активный контент
        let activElementContent = document.querySelector(".tab__content_active");
        activElementContent.classList.remove("tab__content_active");

        //Устанавливаем видимость
        listTabMenu[i].classList.add("tab_active");
        listContents[i].classList.add("tab__content_active");
    }
}
