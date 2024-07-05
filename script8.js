const display = document.querySelector('#display')
const buttons = document.querySelector('#buttonDiv')
//  array a
let arrA = [];
//  array b
let arrB = [];
//  operator var
let operator = null
// a switch to know if ival was called from equals
let evalFromEnt = 0
//variable for the result of evaluate (the answer) used to poulate the display on ent.
let x = 0

 
//  evaluate function
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
  
    // if eval called from ent clickshow answer but leave empty arrA
   // if (evalFromEnt == 0){arrA = x.toString().split('')}
}


clear = function(){
    arrA = [];
    arrB = [];
    operator = null;
}




displayUpdate = function(){

if (arrA.length != 0) { display.textContent = arrA.join('')}
if (arrB.length != 0) { display.textContent = arrB.join('')}
else if (arrA.length == 0 && arrB.length == 0) {display.textContent = 0}
if (x) { 
  display.textContent = x;
  x = 0;
}
// show operator somehow??

}



//  button press function 
buttonclick = function(event){
  const value = event.target.value ;
  const id = event.target.id;
  switch (id){

  case 'num':{
              // no operator is stored: push value to A
              // operator is stored: push to value B          
      if (!operator){arrA.push(value)}
      else {arrB.push(value)} 
  }
  break;
  // dec, and:
  case 'dec':{
              // no operator is stored, and: 
                                          // A is empty push 0,'.' to A
                                          // A is not empty push to A
      if (!operator){
        if (arrA.length == 0){ arrA.push(0,'.')}
        else (arrA.push('.'))
      }
            // operator is stored, and:
                                          // B is empty push 0,'.' to B
                                          // B is not empty push '.' to B
      else {
        if (arrB.length == 0) { arrB.push(0,'.')}
        else { arrB.push('.')}
      }
  }
  break;
    // opr  , and:
  case 'opr':{
    
       //if value is '-' 
    if (value == '-'){
      //          if arra is empty  push '-' to arra
      if (arrA.length == 0){arrA.push('-')}
      //          else if arrb is not empty
      else if (arrB.length != 0){
        //                    evaluate and set operator to '-'
        evaluate();
        operator = value ;
        arrA = [];
        arrB = [];
        arrA.push(x);
      } 
      //          else if arra is not empty and arra.join is not = '-'
      //                    set operator to '-' \
      else if (arrA.length != 0 && arrA.join('') != '-'){ operator = '-'}
      
    }
    // operator is stored and b is not empty call evaluate function and replace operator with value
    else if (arrA != 0 && arrB == 0){ operator = value}
    else if (operator && arrB.length != 0){ 
    evaluate();
    operator = value;
    arrA = [];
    arrB = [];
    arrA.push(x);
    }
  }
break;
    // Ent, and operator is stored and B is not empty call evaluate function
  case 'ent':{
        if (operator && arrB.length != 0) {
          evaluate(); 
          // operator = value;
          arrA = [];
          arrB = [];
          evalFromEnt = 1;

        }
  }
  break;
    // clr -- call clear function 
  case 'clr':{
    arrA = [];
    arrB = [];
    x = 0
    operator = null;
    evalFromEnt = 0;
  }
break;
}

displayUpdate()
//reset evalfroment
}
buttons.addEventListener('click',buttonclick)