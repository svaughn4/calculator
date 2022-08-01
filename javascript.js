// initiate display variable to show in screen
let display = document.getElementById('display');
let content = document.createTextNode("");
display.appendChild(content);

// initiate variables to store the two input nums
let nums = new Array(); 
let operations = new Array(); 
let current = new Object();
current.dig = "";


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

// reads through the nums and operations array to reduce to single value 
function solution() { 
    let output = nums.reduce((total, num) => operator(total, num));  
    nums.length = operations.length = 0; 
    content.nodeValue = (`${output}`); 
    current.dig+= (`${output}`)
}


// calls the input operation on the 2 numbers
function operator(num1, num2) { 
    //string = string.toLowerCase();
    if(operations[0] === '+') { 
        operations.shift();
        return add(num1, num2); 
    }else if(operations[0] === '-') { 
        operations.shift();
        return subtract(num1, num2); 
    }else if(operations[0] === 'x') {
        operations.shift();
        return multiply(num1, num2);
    } else if(operations[0] === '/') { 
        operations.shift();
        return divide(num1, num2); 
    }  
 }



 // division click event
document.getElementById('divide').addEventListener('click', () => { 
    let val = document.getElementById('divide').innerText;  
    nums.push(Number(current.dig));
    operations.push(val);
    content.nodeValue+= val;
    current.dig = "";
})

// multiplication click event
document.getElementById('multiply').addEventListener('click', () => {
    let val = document.getElementById('multiply').innerText; 
    nums.push(Number(current.dig)); 
    operations.push(val);
    content.nodeValue+= val;  
    current.dig = "";
} )

// // subtraction click event
document.getElementById('subtract').addEventListener('click', () => {
    let val = document.getElementById('subtract').innerText;  
    nums.push(Number(current.dig)); 
    operations.push(val);
    content.nodeValue+= val; 
    current.dig = "";
})

// addition click event 
document.getElementById('add').addEventListener('click', () => { 
    let val = document.getElementById('add').innerText;
    nums.push(Number(current.dig)); 
    operations.push(val);
    content.nodeValue+= val;
    current.dig = "";
})

// equal click event aka perform operation
document.getElementById('equal').addEventListener('click', () => { 
    let val = document.getElementById('equal').innerText;
    nums.push(Number(current.dig));
    current.dig = ""; 
    solution();
})

// clear click event 
document.getElementById('clear').addEventListener('click', () => { 
    nums.length = operations.length = 0;
    content.nodeValue = "";
})

// add numeric values as click events to digits
for(let i = 0; i < 10; i++) { 
    const button = document.getElementById((`${i}`));
    button.addEventListener('click', () => {
        current.dig+= (`${i}`);
        content.nodeValue+= (`${i}`) });
}

