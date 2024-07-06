const buttons = document.querySelector('#buttonDiv');
const display = document.querySelector('#display');
const oprDisplay = document.querySelector('#oprDisplay')

let arrA = [];
let operator = null;
let arrB = [];
let x = 0;
let value = null;
let enterCase = 0

display.textContent = '0'

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
clickFuction = function(event){
  if (event.target.tagName === 'BUTTON'){
    value = event.target.value
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
            divide()
            break;
    
        case 'clr':
          clear()
          break;
        
        case 'ent':
          enter()
          break;
    
    }
    oprDisplay.textContent = operator;
  }
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

zero = function(){
  if (enterCase){
    arrA = [];
    enterCase = 0;
  }
  
  if ( arrA.length == 0 ){
      arrA.push('0');
      display.textContent = arrA.join('');
    }
  else if (operator && arrB.length == 0){
    arrB.push('0');
    display.textContent = arrB.join('');
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
          evaluate();
          arrA = [];
          arrA.push(x);
          operator = '-'
          arrB = [];
          display.textContent = Number(arrA.join(''));
      }
  }
  enterCase = 0;
}


add = function(){
  if (arrA.length !=0 && arrB.length == 0 ){ operator = '+'}
  else if (operator && arrB.length != 0 ){
    evaluate();
    arrA = [];
    arrA.push(x);
    operator = '+';
    arrB = []
    display.textContent = Number(arrA.join(''));
  }
  enterCase = 0;
}

multiply = function(){
  if (arrA.length !=0 && arrB.length == 0 ){ operator = '*'}
  else if (operator && arrB.length != 0){
    evaluate();
    arrA = [];
    arrA.push(x);
    operator = '*';
    arrB = []
    display.textContent = Number(arrA.join(''));
  }
  enterCase = 0;
}

divide = function(){
  if (arrA.length !=0 && arrB.length == 0 ){ operator = '/'}
  else if (operator && arrB.length != 0){
    evaluate();
    arrA = [];
    arrA.push(x);
    operator = '/';
    arrB = []
    display.textContent = Number(arrA.join(''));
  }
  enterCase = 0;
}

enter = function(){
  
  if (arrB.length != 0){
    evaluate();
    arrA = [];
    arrA.push(x);
    operator = null;
    arrB = []
    display.textContent = Number(arrA.join(''));
    enterCase = 1;
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

buttons.addEventListener('click',clickFuction);