//Variables
const buttons = document.querySelectorAll('.btn')
let displayValue = 0;
let firstNumber = 0;
let secondNumber = 0;


//Operations
function add(num1, num2){
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 + num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2){ //should be called after a operator button is pressed
    if(operator==='add'){
        return add(num1, num2);
    }
    else if(operator==='subtract'){
        return subtract(num1, num2);
    }
    else if(operator==='multiply'){
        return multiply(num1, num2);
    }
    else if(operator==='divide'){
        return divide(num1, num2);
    }
}

function updateNumber(num) {
    num = parseInt(num) //so it stores as int
    console.log(num)

    displayValue = (displayValue*10) + num
    document.getElementById('calcNum').innerHTML= displayValue
}

//Button funcitons
function clear(){
    document.getElementById('calcNum').innerHTML= 0
    displayValue = 0;
    firstNumber = 0;
    secondNumber = 0;
}

function deleteNumber(){
    let numString = displayValue.toString()
    numString = numString.slice(0,-1)
    displayValue = numString
    document.getElementById('calcNum').innerHTML= displayValue
}

//if a operation button is pressed, num1 should be saved


//if = cutton is pressed, num2 should be saved & afterwards calculated



//Step 4: Calculate function that ties everything together
function calculator(button) {
    let num = button.innerHTML

    if (Number.isNaN(parseInt(num))){ //in this case it should operate and wait for new number
        if (button.getAttribute('id') === 'clear'){
            clear();
            return
        }
        else if (button.getAttribute('id') === 'delete'){
            deleteNumber();
            return
        }

        return 
    }
    else { //should update the number
        return updateNumber(num)
    }
    
}

//clickable buttons --> call functions
buttons.forEach(button =>{ 
    button.addEventListener('click', () => {
        calculator(button);
    });
})

