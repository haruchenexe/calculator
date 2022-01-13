let disNum1 = '';
let disNum2 = '';
let operator = '';
let result = '';
let decimial = '';
let plusMinus = '';
const numberPads = document.querySelectorAll('.numpad');
const operatorPads = document.querySelectorAll('.operators');
const equalBtn = document.querySelector('#equal');
const plusMinuBtn = document.querySelector('#plusminus');
const displayResult = document.querySelector('#display');
const clearAll = document.querySelector('#clear');


numberPads.forEach(num => num.addEventListener('click', e=> {
    if ((operator == '') && (disNum1.length < 9)) {
        disNum1 += e.target.textContent;
        displayResult.textContent = disNum1;
    } 
    else if ((disNum1 != '') && (operator != '') && (result == '') && (disNum2.length < 9)) {
        disNum2 += e.target.textContent;
        displayResult.textContent = disNum2;
    }
    else {
        return
    }
}))


operatorPads.forEach(opt => opt.addEventListener('click', e=> {
    if ((disNum1 != '') && (disNum2 != '')) {
        equalTotal()
        operator = e.target.textContent;
        disNum1 = result;
        disNum2 = ''
        result = ''
    }
    else {
        operator = e.target.textContent
    }
}))


equalBtn.addEventListener('click', e=> {
    equalTotal()
    disNum1 = result
    disNum2 = ''
    result = ''
})


function equalTotal() {
    let formatdisNum1 = parseFloat(disNum1);
    let formatdisNum2 = parseFloat(disNum2);
    formattedResult = operate(formatdisNum1, formatdisNum2, operator);

    result = parseFloat(formattedResult.toFixed(2));
    displayResult.textContent = result;
}


plusMinuBtn.addEventListener('click', e=> {

    console.log(disNum1)
    console.log(disNum2)
    if ((disNum1 != '') && (disNum2 == '') && (parseFloat(disNum1) > 0)) {
        disNum1 = (parseFloat(disNum1) *  -1)
        displayResult.textContent = disNum1;
    }
    else if ((disNum1 != '') && (disNum2 != '') && (parseFloat(disNum1) < 0)) {
        disNum1 = (parseFloat(disNum1) *  -1)
        displayResult.textContent = disNum1;
    }
    else if ((disNum1 != '') && (disNum2 != '') && (parseFloat(disNum2) > 0)) {
        disNum2 = (parseFloat(disNum2) *  -1)
        displayResult.textContent = disNum2;
    }
    else {
        disNum2 = (parseFloat(disNum2) *  -1)
        displayResult.textContent = disNum2;
    }
})


clearAll.addEventListener('click', e=> {
    restart()
})


function restart() {
    disNum1 = '';
    disNum2 = '';
    result = '';
    decimial = '';
    plusMinus = '';
    operator = '';
    displayResult.textContent = '';
}


function operate(num1, num2, opt) {

    if (opt == '+') {
        return num1 + num2
    } else if (opt == '-') {
        return num1 - num2
    } else if (opt == '*') {
        return num1 * num2
    } else if (opt == '/') {
        return num1 / num2
    } else if (opt == '%') {
        return num1 % num2
    } else {
        return 'Error'
    }
}
