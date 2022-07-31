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
    //string = string.toLowerCase();
    if(string === 'add') return add(num1, num2); 
    else if(string === 'subtract') return subtract(num1, num2); 
    else if(string === 'multiply') return multiply(num1, num2);
    else if(string === 'divide') return divide(num1, num2);
 }


// initiate display variable to show in screen
let display = document.getElementById('display');
let content = document.createTextNode("");
display.appendChild(content);


 // division click event
// document.getElementById('divide').addEventListener('click', operator())

// // multiplication click event
// document.getElementById('multiply').addEventListener('click'), operator()

// // subtraction click event
// document.getElementById('subtract').addEventListener('click', operator())

// // addition click event 
// document.getElementById('add').addEventListener('click', operator())

// clear click event 
document.getElementById('clear').addEventListener('click', () => content.nodeValue = "")

// add numeric values as click events to digits
for(let i = 0; i < 10; i++) { 
    const button = document.getElementById((`${i}`));
    button.addEventListener('click', () => {
        content.nodeValue = (`${i}`) });
}