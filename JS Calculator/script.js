const input = document.querySelector('.input');
const delBtn = document.querySelector('.fa-backspace');

// Our prev number
let prevNum = '';

// Make all operations like +, -, *, /
function press(num) {
    if (prevNum += num) {
        input.value = prevNum;
    }
    else if (prevNum -= num) {
        input.value = prevNum;
    }
    else if (prevNum *= num) {
        input.value = prevNum;
    }
    else if (prevNum /= num) {
        input.value = prevNum;
    }
};

// Make equal button which will our numbers +, -, ...
function equal() {
    input.value = eval(prevNum);
    prevNum = input.value;
};

// When we click on C btn calculator will going to reset
function refresh() {
    input.value = '';
    prevNum = input.value;
};