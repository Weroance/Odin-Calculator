const display = document.querySelector('#display')
const buttons = document.querySelector('#buttonDiv')
//  array a
let arrA = [];
//  array b
let arrB = [];
//  operator var
let operator = null

 
//  evaluate function
evaluate = function(){
    let a = Number(arrA.join(''));
    let b = Number(arrB.join(''));
    let x = 0
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
    clear()
    arrA = x.toString().split('')
}


clear = function(){
    arrA = [];
    arrB = [];
    operator = null;
}




displayUpdate = function(){
// if B is not empty show B else show A
   if (arrB.length != 0) { display.textContent = arrB.join('') }
   else if (arrA.length != 0 ) {display.textContent = arrA.join('')}
    else{ display.textContent = 0}
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
                // A is empty and operator = '-' push '-' to A
      console.log(arrA.length == 0)         
      if (arrA.length == 0 && value == '-') {arrA.push('-')}
                // A is empty and operator != '-' push 0 to A
      else if (arrA.length == 0 && value != '-'){ arrA.push(0)}
                // operator is empty, operator = value        
      if (!operator) {operator = value}
                // operator is stored and b is not empty call evaluate function and replace operator with value
      else if (operator && arrB){ 
        evaluate();
        operator = value
      }
  }
  break;
    // Ent, and operator is stored and B is not empty call evaluate function
  case 'ent':{
        if (operator && arrB) {evaluate()}
  }
  break;
    // clr -- call clear function 
  case 'clr':{
        clear()
  }
break;
}

displayUpdate()

}
buttons.addEventListener('click',buttonclick)