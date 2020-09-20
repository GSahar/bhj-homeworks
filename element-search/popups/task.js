//Вольная интерпритация ..
//document.getElementById('modal_main').style.display = "flex";
document.getElementById('modal_main').classList.add("modal_active");

//Получаем все кнопки закрытия модального окна
let closeButtons = document.querySelectorAll('.modal__close_times');
//Перечесляем кнопки
for (let closeButton of closeButtons) {
    //Назначаем событие нажатия
    closeButton.onclick = function () {
        //closeButton.closest('.modal').style.display = "none";
        //Скрываем окно        
        closeButton.closest('.modal').classList.remove("modal_active");
    }

}

let btnShowSuccess = document.querySelector('.btn_danger');
btnShowSuccess.onclick = function () {
    document.getElementById('modal_main').classList.remove("modal_active");
    document.getElementById('modal_success').classList.add("modal_active");
}
/* Вольная интерпритация ..
btnShowSuccess.onclick = function () {
    document.getElementById('modal_main').style.display = "none";
    document.getElementById('modal_success').style.display = "flex";
}*/