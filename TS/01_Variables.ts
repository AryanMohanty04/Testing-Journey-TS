// //Variables: A Variable is a container which can store some data.
// let x:number = 10;
//  console.log(typeof(x));

//  //Block and Functional Scoped

//  function blockScope(){
//     if(true){
//         let x = 10;
//         const y = 20;

//         console.log(x);
//         console.log(y);
//     }
//     // console.log(x);
//     // console.log(y);
//  }

//  function functionalScope(){
//     if(true){
//         var z = 10;
//         console.log(z);
//     }
//     console.log(z);
//  }

//  blockScope();
//  functionalScope();

//  //Declaration/Value Assignment:
//  // -> var can be declared without initialization;
//  var a; //Declaration
//  console.log(a); //it sets it as any
//  a = 20; //Initialization
//  console.log(typeof(a));

//  // -> let can be declared without initialization;
//  let b;
//  console.log(b); //gives undefined as var
//  b = 30;
//  console.log(typeof(b));

//  // -> const cant be declared without initializing, it must be initialized before declaration;
//  const c = 100;
//  console.log(c);

//  //Redeclaration
//  //-> var allows
//  var city:string = "Delhi";
//  var city:string = "Mumbai";
//  console.log(city);
//  // -> let and const don't allow redeclaration


//  //Reassignment
//  var age = 25;
//  age = 55;
//  //this is called re-initialization/reassignment
//  //let also allows, but const doesn't allow reassignment

//  //Hoisting
// //  console.log(q);
//  var q = 10;
//  console.log(q);