//DOM Load 
document.addEventListener('DOMContentLoaded', () => {


    arrow_full.innerHTML = `The Sum is :  ${arrowFun1(1,2)}`;
    arrow_red1.innerHTML = `The Sum is :  ${arrowFun2(1,2)}`;
    arrow_red2.innerHTML = `The Sqrt is :  ${arrowFun3(4)}`;



})

//1. Replace the e mpty string with arrow function 
let sum = (a, b) => a + b;
//2. An arrow function with full syntax
const arrowFun1 = (a, b) => {  let result = a + b;  return result;  };

//3. A minimized arrow function [No return statement , no curly brace]
const arrowFun2 = (a, b) => a + b;;

//4. A minimized arrow function [No return statement , no curly brace, no square bracket]
//5. The function will return the sqrt , use Math.sqrt(var);
const arrowFun3 =  x => console.log(x); ;