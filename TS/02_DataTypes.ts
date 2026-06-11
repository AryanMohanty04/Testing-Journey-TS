//DataTypes: What type of data we want to store in a variable

//Primitive Data Types:
//1. Number: Integer/Floating Number/Big int
let num1:number = 10;
let num2:number = 10.10;
let num3:number = 10000000000000000;

console.log("Numbers:->")
console.log(num1);
console.log(num2);
console.log(typeof(num3))

//2. String
let str1:string = "TypeScript";
let str2:string = "T";

console.log("\nStrings:->")
console.log(str1);
console.log(typeof(str2));
console.log(str2);

//3. Boolean: True/False

let bool1:boolean = true;
let bool2:boolean = false;

console.log("\nBooleans:->")
console.log(bool1);
console.log(typeof(bool2))

//4. Null - Undefined : Value not assigned 
let char:null = null;
let und:undefined = undefined;

console.log("\nUndefined - Null:->")
console.log(char);
console.log(typeof(char)); //null is an object
console.log(und);
console.log(typeof(und));

//5. Union: Here we can explicitly say that a variable can have multiple types

let un1:string | number | boolean;
un1 = "Tada";
console.log("\nUnion:->")
console.log(un1);
console.log(typeof(un1));

un1 = 40;
console.log(un1);
console.log(typeof(un1));

un1 = true;
console.log(un1);
console.log(typeof(un1));
