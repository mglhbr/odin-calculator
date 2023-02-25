//Variables
const buttons = document.querySelectorAll('.btn')
let displayValue = 0;
let displayOperation='';

let firstNumber = 0;
let secondNumber = 0;
let currentOperator = '';
let canOperate = 1; // 0=no 1=yes
let canEquals = 0; // 0=no 1=yes


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

function operate(operator, num1, num2){ //should be called after = button is pressed
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
    document.getElementById('calcOperation').innerHTML= ''
    displayValue = 0;
    firstNumber = 0;
    secondNumber = 0;
    currentOperator = '';
    canOperate = 1;

}

function deleteNumber(){
    let numString = displayValue.toString()
    numString = numString.slice(0,-1)
    displayValue = parseInt(numString) //turn string back to int fixed bug
    document.getElementById('calcNum').innerHTML= displayValue
}

//if a operation button is pressed:
// num1 saved, displayValue = 0 + HTML updated
// id of button saved in variable (global)
// num 1 + (operator) in calcOperation div
function updateOperation(button){
    if(canOperate===1){ // so you cant hit an operation 2x in a row
        firstNumber = displayValue;
        displayValue = 0;
        document.getElementById('calcNum').innerHTML= displayValue
        currentOperator = button.getAttribute('id') // saves the current operator so operate function can choose
    
        console.log(currentOperator)
        //Operation is displayed and stored for further manipulation
        displayOperation = firstNumber + ' ' + button.innerHTML
        document.getElementById('calcOperation').innerHTML= displayOperation

        canOperate=0;
        canEquals=1;
        return
    }
    else {return}
}

//if = button is pressed:
//secondNumber should be saved & afterwards calculated with operate()
//can operate again, bcs display Value is new num
function equals(){
    if(canEquals===1){
        secondNumber = displayValue;
        displayValue = operate(currentOperator, firstNumber, secondNumber);
        document.getElementById('calcNum').innerHTML= displayValue
    
        //Operation is updated
        displayOperation = displayOperation + ' '+ secondNumber
        document.getElementById('calcOperation').innerHTML= displayOperation

        canEquals=0;
        canOperate=1;
        return
    }
    else {return}// so you can only equals after you choose operator
}


//if dot(.) button is pressed:



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
        else if(
            button.getAttribute('id') === 'divide' ||
            button.getAttribute('id') === 'multiply' ||
            button.getAttribute('id') === 'subtract' ||
            button.getAttribute('id') === 'add' 
        ){
            updateOperation(button);
            return
        }
        else if (button.getAttribute('id') === 'equals'){
            equals();

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

