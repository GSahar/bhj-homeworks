//let clicker__cookie = document.getElementById("cookie");
let countClick = 0;

let clicker_counter = document.getElementById("clicker__counter");
cookie.onmousedown = function () {
    countClick += 1;
    clicker_counter.innerHTML = countClick;
    this.width = 300;
}

cookie.onmouseup = function () {
    this.width = 200;
}