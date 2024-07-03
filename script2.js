//variable as display/working number
const display = document.querySelector('#display');
const buttonDiv = document.querySelector('#buttonDiv');
let first = null
let second = null
let operator = null
let answer = null
let inputType = null
let inputArr = []
let displayArr = []

// order of operation:
//
//         |second
//        +|first
//      ---------------
//
// calc function answer = lot2 operator slot1 , display = answer, slots = 0
operate = function(operator,a,b){
    switch(operator){
        case '/' :
            return (a / b);
            break;
        case 'x' :
            return (a * b);
            break;
        case '-' :
            return (a - b);
            break;
        case '+' :
            return (a + b);
            break;
        }
}
 // refactor for input tuupe names stored in html ( inputType = input.target.id)
parseInput = function(input){
    if (input.target.id == 'enter') inputType = 'enter';
    else if (input.target.id == 'clear') inputType = 'clear';
    else if (input.target.id == 'point') {
        if (inputArr.includes('.')) { inputType = null }
        else  inputType = 'number';
    }
    else if (!isNaN(input.target.textContent)) inputType = 'number';
    else if (isNaN(input.target.textContent))  inputType = 'operator';
    // move operator variable = operator here
}

updateDisplay = function(){
    displayArr = []
    if (second == NaN) {second = 0}
    if (second == null) { displayArr.push(0)}
    displayArr.push(second)
    if (operator) {displayArr.push(' ' + operator)}
    if (first) {
        displayArr = [];
        displayArr.push(first);
        // trim the arr to display max and display ~
    }
    display.textContent = displayArr.join('');

}

pressButton = function(event){
    let buttonPressed = event.target.textContent;
    parseInput(event);
    if (inputType == 'clear'){
        first = null;
        second = null;
        operator = null;
        inputArr = [];
        
    }
    else if (second == null){
        if (inputType == 'operator'){ 
            operator = buttonPressed;
            second = 0 ; 
        } 
        
        if (inputType == 'number'){ 
            if (buttonPressed == '.') inputArr.push('0.');
            else inputArr.push(buttonPressed); 
            second = Number(inputArr.join(''));
        }
        
    }
        
    else if (second != null && first == null){
        
        if (inputType == "operator") operator = buttonPressed ;
        
        if (inputType == "number" &&  operator == null ) {
                inputArr.push(buttonPressed) ;
                second = Number(inputArr.join('')) ;
        }
        
        if (inputType == 'number' && operator != null ){
            inputArr = [];
            inputArr.push(buttonPressed); 
            first = Number(inputArr.join(''));
        }
        
    }
        
    else if (second != null && first != null){
        
        if (inputType == 'number'){
            inputArr.push(buttonPressed);
            first = Number(inputArr.join(''));
        }
        
        if (inputType == 'operator') {
            inputArr = [];
            answer = operate(operator,second,first);
            second = answer
            first = null 
            operator = buttonPressed;
        }
        
        if  (inputType == 'enter')  {
            inputArr = [];
            answer = operate(operator,second,first);
            second = answer
            first = null 
            operator = null;
        }
           
    
    }
    updateDisplay(); 
}
    


// listener for buttons

buttonDiv.addEventListener('click', pressButton);