additionbutton=document.getElementById("additionbutton");
addition=function(){
    var sum=0;
    var number1=document.getElementById("number1");
    number1=number1.value;
    var nums=number1.split(',');
    //const number2=document.getElementById("number2");
    for (let index = 0; index < nums.length; index++) {
        sum += parseInt(nums[index]);;
        
    }
    const result = document.getElementById("result");
    result.innerText=sum;
}

additionbutton.addEventListener("click",addition);

//substraction
substractionbutton=document.getElementById("substractionbutton");
substraction=function(){
    const number1=document.getElementById("number1");
    const number2=document.getElementById("number2");

    const diff=parseInt(number1.value) - parseInt(number2.value);

    const result = document.getElementById("result");
    result.innerText=diff;
}

substractionbutton.addEventListener("click",substraction);

//multiplication

multiplybutton=document.getElementById("multiplybutton");
multiplication=function(){
    var product=1;
    var number1=document.getElementById("number1");
    number1=number1.value;
    var nums=number1.split(',');
    //const number2=document.getElementById("number2");
    for (let index = 0; index < nums.length; index++) {
        product *= parseInt(nums[index]);;
        
    }
    const result = document.getElementById("result");
    result.innerText=product;
    
}

multiplybutton.addEventListener("click",multiplication);

//division

divisonbutton=document.getElementById("divisonbutton");
division=function(){
    
    const number1=document.getElementById("number1");
    const number2=document.getElementById("number2");
    if (parseInt(number2.value) !==0){
    const divResult=parseInt(number1.value) / parseInt(number2.value);
    const result = document.getElementById("result");
    result.innerText=divResult;
    }
    else{
        alert("division by zero not possible!!!")
    }
    
}

divisonbutton.addEventListener("click",division);

//power

powerbutton=document.getElementById("powerbutton");
power=function(){
    const number1=document.getElementById("number1");
    const number2=document.getElementById("number2");

    const raiser=parseInt(number1.value) ** parseInt(number2.value);
    const result = document.getElementById("result");
    result.innerText=raiser;
}

powerbutton.addEventListener("click",power);




 