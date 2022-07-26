function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);
  } else {
    alert( pow(x, n) );
  }

 let ask = (question, yes, no)=>{
    if (confirm(question)) yes();
    else no();
 }

 ask('Do you agree?',
    () => {alert('You agreed');},
    () => {alert('You cancelled, the execution');}
 )