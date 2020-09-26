//Установка текста в кнопке
function innerTextToButton(elemOutput,elemInput,elemHide) {
    //Проходим по всем элементам списка
    for(let itemList of elemOutput) {

        //Назначаем событие
        itemList.onclick = function(e) {
            //запрещаем переход по ссылке
            e.preventDefault();
            //присваиваем текст кнопке
            elemInput.innerHTML = this.innerHTML;
            //закрываем список
            elemHide.classList.remove("dropdown__list_active");
        }
    }
}

// Получаем все кнопки на экране
let dropDownValues = document.querySelectorAll(".dropdown__value");
//Проходим по кнопкам и назначаем событие
for (let dropDownValue of dropDownValues) {
    //Определяем следующий елемент за кнопкой (предполагая что это список)
    let dropDownList = dropDownValue.nextElementSibling;
    //Назанчаем событие 
    dropDownValue.onclick = function () {

        //Если есть класс отображения, то удаляем его
        if (dropDownList.classList.contains("dropdown__list_active")) {
            dropDownList.classList.remove("dropdown__list_active");
            return;
        }
        //добавляем класс если нужно отобразтьб список
        dropDownList.classList.add("dropdown__list_active");
    }

    //Получаем все эелементы списка
    let itemsList = dropDownList.querySelectorAll(".dropdown__link");
    innerTextToButton(itemsList,dropDownValue,dropDownList)
  
}