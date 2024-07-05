const buttons = document.querySelector('#buttonDiv');
const display = document.querySelector('#display');

let arrA = [];
let operator = null;
let arrB = [];
let x = 0;
let value = null;

display.textContent = arrA
arra

evaluate = function(){
    let a = Number(arrA.join(''));
    let b = Number(arrB.join(''));
    switch (operator){
        case '+': 
          x =  a + b;
            break;
        case '-':
          x =  a - b;
            break;
        case '*':
          x =  a * b;
            break;
        case '/':
          x = a / b;
            break;
    }
}
// switch to  load value and call each button function and then clear value i think
clickFuction = function(){
    switch (value){
        case '1','2','3','4','5','6','7','8','9':
            number()
            break;
        
        case '0':
            zero();
            break;
            
        case '.':
            decimal()
            break;
        
        case '-':
            subtract()
            break;
        
        case '+':
            add()
            break;
        
        case '*':
            multiply()
            break;
        
        case '/':
            devide()
            break;

        case 'clr'

    }
}

buttonPrototype = function(){
    
  // if operator
  // if operator and b
  
}

number = function(){
    if (!operator){ arrA.push(value)}
    else { arrB.push(value)}
}

decimal = function(){
    // if a and !operator
    if (!operator && !arrA.includes('.')){ arrA.push('.')}
   
    else if (operator && !arrB.includes('.')){ arrB.push('.')}
}

subtract = function(){
    // if !a
    if (!operator){
      if ( arrA.length == 0){ arrA.push('-')}
      else { operator = value}
    }
    else if (operator){
        if ( arrB.length == 0){ arrB.push('-')}
        else {
            evaluate();
            arrA = [];
            arrA.push(x);
            display.textContent = Number(arrA.join(''))
        }
    }
}

zero = function(){

}

add = function(){
    // if operator
  // if operator and b
}

multiply = function(){
    
    // if operator
    // if operator and b
    
}

devide = function(){
    
    // if operator
    // if operator and b
    
}

buttons.addEventListener('click',clickFuction)