// 1. Create a Person_ES6 Class 
function Person(firstName, lastName) {
    this.firstName = firstName || "unknown";
    this.lastName = lastName || "unknown"; 
   } 
   Person.prototype.getFullName = function () 
   { 
       return this.firstName + " " + this.lastName; 
   } 
   function Student(firstName, lastName, schoolName) 
   { 
        Person.call(this, firstName, lastName); 
        this.schoolName = schoolName || "unknown"; 
   }
   


//2. Create the constructor that initialize firstName and lastName


//3. Define greeting() method that displays Full Name


//4. Create  Object using ES6 class by passing firstName,lastName ["Bran Stark"]

var bran = Person("bran","stark")

//5. Display the greeting on Bran Object [remove the string when you have the object]
Obj_C3.innerHTML = "bran.getFullName()";
