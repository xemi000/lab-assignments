

let choice;
let nums = [];
let operaion = " ";


choice=prompt("how many numbers do you want to enter?");
for (let index = 0; index < choice; index++) {
    num1 = prompt("enter num");
    nums.push(num1);
    }
operaion = prompt("enter operation from add,sub,mult,div");




    
    function sum(nums) {
        var result=0;
        for (let index = 0; index < nums.length; index++) {
            if(isNaN(nums[index])){
                continue;
                 }
            result += Number(nums[index]);
            }
        return result;
    }
    function sub(nums) {
        var result=0;
        for (let index = 0; index < nums.length; index++) {
            if(isNaN(nums[index])){
                continue;
                 }
           result=(Number(nums[index])-result);
            }
        return result;
    }
    function mult(nums) {
        var result=1;
        for (let index = 0; index < nums.length; index++) {
            
           result*=Number(nums[index]);
            }
        return result;
        
        
    }
    function div(nums) {
        var result=1;
        for (let index = 0; index < nums.length; index++) {
            if (Number(nums[index])!==0) {
                result=Number(nums[index])/result;
            }
           else{
            alert("division by zero");
            break;
           }

                }
        return result;
        
        
    }
    switch(operaion) {
    case "add": 
        console.log(sum(nums));
        break;
        
    
    case "sub" : 
        console.log(sub(nums));
        break;
        
    
    case "mult" : 
        console.log(mult(nums));
        break;
        
    
    case "div" : 
        console.log(div(nums));
        break;
        
    default:
        console.log('Invalid operator');
        break;
}
    
    










