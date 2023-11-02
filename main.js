let repeat = true;
let firstNumber;
let secondNumber;
let sign;
let result;
while (repeat) {
    let arithmeticOperation = prompt(`Select a mathematical operation. For addition: add; For substraction: sub; For multiplication: mult; For division: div.`, '');
    while (!(arithmeticOperation === 'add' || arithmeticOperation === 'sub' || arithmeticOperation === 'mult' || arithmeticOperation === 'div')) {
        arithmeticOperation = prompt('Please, enter only: add, sub, mult, div');
    }
    let operationName;
    switch (arithmeticOperation) {
        case 'add':
            operationName = 'addition';
            sign = '+';
            break;
        case 'sub':
            operationName = 'substraction';
            sign = '-'
            break;
        case 'mult':
            operationName = 'multiplication';
            sign = '*'
            break;
        case 'div':
            operationName = 'division';
            sign = '/';
            break;
    }

    alert(`You have chosen ${operationName}`);

    let checkFirst = false;
    while (!checkFirst) {
        firstNumber = +prompt('Enter first number');
        checkFirst = !isNaN(firstNumber) ? true : (alert('Enter numbers only'), false);
    }
    console.log(firstNumber);

    let checkSecond = false;
    while (!checkSecond) {
        secondNumber = +prompt('Enter second number');
        checkSecond = !isNaN(secondNumber) ? true : (alert('Enter numbers only'), false);
    }
    console.log(secondNumber);

    if (arithmeticOperation === 'add') {
        result = firstNumber + secondNumber;
    } else if (arithmeticOperation === 'sub') {
        result = firstNumber - secondNumber;
    } else if (arithmeticOperation === 'mult') {
        result = firstNumber * secondNumber;
    } else if (arithmeticOperation === 'div') {
        result = firstNumber / secondNumber;
    }

    alert(`${firstNumber} ${sign} ${secondNumber} = ${result}`);

    repeat = confirm('Do you want to repeat?');
}