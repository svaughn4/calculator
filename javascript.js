function add(a, b) { 
    return a + b;
}

function subtract(a, b) { 
    return a - b;
}

function multiply(a, b) { 
    return a * b;
}

function divide(a, b) { 
    return a / b;
}

// calls the input operation on the 2 numbers
function operator(string, num1, num2) { 
    string = string.toLowerCase();
    if(string === 'add') return add(num1, num2); 
    else if(string === 'subtract') return subtract(num1, num2); 
    else if(string === 'multiply') return multiply(num1, num2);
    else if(string === 'divide') return divide(num1, num2);
 }