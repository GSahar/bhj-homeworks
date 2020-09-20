// Все изображения в слайдере
let sliderItems = Array.from(document.querySelectorAll(".slider__item"));
// количество элементов
let countSliderItems = sliderItems.length - 1;
// Кнопки перехода
let buttonsSlide = document.querySelectorAll(".slider__arrow");
//определяем стартовый слайд
let startSlide = getStarted(sliderItems);
// начальные установки
let nextSlide = startSlide, prevSlide = startSlide;

for (let buttonSlide of buttonsSlide) {
    //Левая стрелочка
    if (buttonSlide.classList.contains("slider__arrow_prev")) {
        buttonSlide.onclick = function () {
            prevSlide = nextSlide;
            nextSlide === startSlide ? nextSlide = countSliderItems : nextSlide = nextSlide - 1;
            activSlide(prevSlide, nextSlide);
        }
    }
    else {
        buttonSlide.onclick = function () {
            prevSlide = nextSlide;
            nextSlide === countSliderItems ? nextSlide = startSlide : nextSlide = nextSlide + 1;
            activSlide(prevSlide, nextSlide);
        }
    }
}

function activSlide(prev, next) {
     sliderItems[prev].classList.remove("slider__item_active");
     sliderItems[next].classList.add("slider__item_active");
}

function getStarted(items) {
    for (let i = 0; i < countSliderItems; i++) {
        if (items[i].classList.contains("slider__item_active")) {
            return i;
        }
    }
}

