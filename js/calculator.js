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

function operate(operator, num1, num2){
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

//Step 4: function that populate the display
function populate(button) {
    let num = button.innerHTML

    if (Number.isNaN(parseInt(num))){ //in this case it should operate and wait for new number
        console.log(Number.isNaN(parseInt(num)))
        return 
    }
    else { //should update the number
        num = parseInt(num) //so it stores as int
        console.log(num)

        displayValue = (displayValue*10) + num
        document.getElementById('calcNum').innerHTML= displayValue
        return
    }
    
}


//clickable buttons
buttons.forEach(button =>{ 
    button.addEventListener('click', () => {
        populate(button);
    });
})

