const buttons = document.querySelector('#buttonDiv');
const displayBox = document.querySelector('#displayBox')
const display = document.createElement('div');
display.id = 'display'
const oprDisplay = document.querySelector('#oprDisplay');
const validKeys = new Set([ '+', '-', '*', '/', 'c', 'x', 'Delete', 'Backspace', 'Enter', '.', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ]);

let arrA = [];
let operator = null;
let arrB = [];
let x = 0;
let value = null;
let enterCase = 0

display.textContent = '0'

clickFunction = function(event){
  // prevent non-button clicks
  if (event.target.tagName === 'BUTTON'){
    value = event.target.value
    eventFunction()
    event.target.blur()
  }
}

keypressFunction = function(event){
  let key = event.key
  if ( validKeys.has(key) ){
    value = key;
    eventFunction();
  }
}

evaluate = function(op){
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
          if ( a == 0 && b == 0 ){ x = 'Snark!'}
            break;
    }
    arrA = [];
    arrA.push(x);
    operator = op;
    arrB = []
    display.textContent = arrA.join('');
}
// switch to load value and call each button function and then clear value i think
eventFunction = function(){
  
    switch (value){
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            number()
            break;
        
        case '0':
            number();
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
        
        case 'x':
            multiply()
            break;
        
        case '/':
            divide()
            break;
    
        case 'Delete':
          clear()
          break;

        case 'c':
          clear()
          break;
        
        case 'Enter':
          enter()
          break;
        
         case 'Backspace':
          backspace()
          break;
    
    }
    if (operator) { oprDisplay.textContent = operator }
    else if (!operator) {oprDisplay.textContent = ''}

}


number = function(){
  if (enterCase){
    arrA = [];
    enterCase = 0;
  }
  
  if (!operator){ 
    arrA.push(value);
    display.textContent = arrA.join('')
  }
  else { 
    arrB.push(value);
    display.textContent = arrB.join('')
  }
  
}


decimal = function(){
  if (enterCase){
    arrA = [];
    enterCase = 0;
  }
  
  if (!operator && !arrA.includes('.')){ 
    arrA.push('.');
    display.textContent = arrA.join('')
  }
  
  else if (operator && !arrB.includes('.')){
    arrB.push('.');
    display.textContent = arrB.join('');
    }
  }
  
subtract = function(){
  if (!operator){
    if ( arrA.length == 0){ 
      arrA.push('-');
      display.textContent = arrA.join('');
    }
    else { operator = '-'}
  }
  else if (operator){
      if ( arrB.length == 0){ 
        arrB.push('-');
        display.textContent = arrB.join('');
      }
      else {
          evaluate('-');
          }
  }
  enterCase = 0;
}


add = function(){
  if (arrA.length !=0 && arrB.length == 0 ){ operator = '+'}
  else if (operator && arrB.length != 0 ){
    evaluate('+');
  }
  enterCase = 0;
}

multiply = function(){
  if (arrA.length !=0 && arrB.length == 0 ){ operator = '*'}
  else if (operator && arrB.length != 0){
    evaluate('*');
  }
  enterCase = 0;
}

divide = function(){
  if (arrA.length !=0 && arrB.length == 0 ){ operator = '/'}
  else if (operator && arrB.length != 0){
    evaluate('/');
  }
  enterCase = 0;
}

enter = function(){
  
  if (arrB.length != 0){
    evaluate(null);
    
    enterCase = 1;
  }
  
}

backspace = function(){

    if (enterCase){
      arrA = [];
      enterCase = 0;
    }
    
    if (!operator){ 
      arrA.pop();
      if ( arrA.length == 0){ display.textContent = '0'}
      else { display.textContent = arrA.join('') }
    }
    else { 
      arrB.pop();
      if ( arrB.length == 0){ display.textContent = '0'}
      else { display.textContent = arrB.join('') }
    }
  }

clear = function(){
  arrA = [];
  operator = null;
  arrB = [];
  x = 0;
  value = null;
  display.textContent = '0'
  enterCase = 0;
}
displayBox.appendChild(display);
document.addEventListener('keydown', keypressFunction)
buttons.addEventListener('click', clickFunction);