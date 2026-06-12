let a:number = 100, b:number = 20;

console.log(`\nArithmetic Operators:->`)
//Arithmetic Operators
//Add
console.log(`Addition: ${a} + ${b}: `,a+b);
//Subtract
console.log(`Subtraction : ${a} - ${b}: `,a-b);
//Multiply
console.log(`Multiply : ${a} * ${b}: `,a*b);
//Div
console.log(`Division : ${a} / ${b}: `,a/b);
//Modulo Division
console.log(`Modulo : ${a} % ${b}: `,a%b);
//Power to (**);
console.log(`Power : ${b}**2 `,b**2);

console.log(`\nAssignment Operators:->`)
a = 10;
b = 5;


a=a+b; //Simple expression
console.log(`a = a + b:->`,a);

//Short hand expression
console.log(`a + = b:->`,a+=b);
//a/=b
//a%=b

//Relational operators: Returns true or false;
console.log(`\nRelational Operators:->`);
a = 100;
b = 200;
console.log(a>b);
console.log(a<b);
console.log(a<=b);
console.log("Strict Equal:",a === b); 
console.log("Equal to", a == b );
a = b
console.log(a);
