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
    if(b === 0) { 
        content.nodeValue = ""; 
        current.dig = "";
        alert("Cannot divide by 0")
        return "";
    } else return a / b;
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
        if(current.dig == '0') { 
            current.dig=(`${i}`) 
            content.nodeValue=(`${i}`) 
        } else{
            current.dig+= (`${i}`);
            content.nodeValue+= (`${i}`); 
        }
    })
}

// add decimal point to number 
document.getElementById('decimal').addEventListener('click', () => { 
    if(content.nodeValue.includes('.')) { 
        alert("Invalid decimal")
    } else {
        current.dig+='.';
        content.nodeValue+='.';
    }
})

// backspace button 
document.getElementById('back').addEventListener('click', () => { 
    content.nodeValue = content.nodeValue.slice(0, -1);
    current.dig = current.dig.slice(0, -1);
})