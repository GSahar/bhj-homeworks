//getHole = index => document.getElementById(`${index}`);
getHole = index => document.getElementById(`hole${index}`);

const trueClick = document.getElementById("dead");
const errClick = document.getElementById("lost");
const winnerScore = 5;
const countHole = 9;
let deadRabbit;
let missRabbit;

/*#region Тут  я не прочитал процесс реализации...))*/

/* Событие клик в окне */
/*window.onclick = function (event) {

    try {
        //Получаем эелемент по которому кликнули 
        getHole(event.target.id).onclick = function () {

            if (this.classList.contains('hole_has-mole')) {
                deadRabbit = +trueClick.textContent + 1;
                setScore(trueClick, deadRabbit);
            } else {
                missRabbit = +errClick.textContent + 1;
                setScore(errClick, missRabbit);
            }
        }
    }
    catch {
        //Если вдруг элемент без идентификатора 
        setScore(errClick, missRabbit + 1);
    }

    //Определяем выиграл игрок или проиграл
    if (deadRabbit === winnerScore || missRabbit === winnerScore) {
        
        deadRabbit === winnerScore ? alert("Вы победили!!!") : alert("Вы проиграли :(");
        deadRabbit = 0;
        missRabbit = 0;
        setScore(trueClick, deadRabbit);
        setScore(errClick, missRabbit);
    }


}*/
/*#endregion */

for (let i = 1; i <= countHole; i++) {
    getHole(i).onclick = function () {

        if (this.classList.contains('hole_has-mole')) {
            deadRabbit = +trueClick.textContent + 1;
            setScore(trueClick, deadRabbit);
        } else {
            missRabbit = +errClick.textContent + 1;
            setScore(errClick, missRabbit);
        }

        if (deadRabbit === winnerScore || missRabbit === winnerScore) {
            
            deadRabbit === winnerScore ? alert("Вы победили!!!") : alert("Вы проиграли :(");
            deadRabbit = 0;
            missRabbit = 0;
            setScore(trueClick, deadRabbit);
            setScore(errClick, missRabbit);            
        }
    }
}

/* Установка счета игры */
function setScore(element, score) {
    element.innerHTML = score;
}

