//Task-1
//********

// let fruits = ['Mango',"banana","orange","lichi","jackfruit"];
// let indexFruit = fruits[3];
// console.log(indexFruit);
// console.log(fruits[3])
// fruits[2] = "jambura";
// console.log(fruits);



//Task-2
//******

// let destinations = ['Bogura',"Dhaka","Chattagrame"];
// console.log(destinations);
// let concOne = destinations.push("rajshahi");
// console.log(destinations);
// let concTwo = destinations.push("borishal","khulna");
// console.log(destinations);
// let del = destinations.pop();
// console.log(destinations);


//Task-3
//******

// let books = ['javascript',"php","python","java","c"];
// if(books.includes("javascript")){
//     let arr = "Yes, javascript book is available";
//     console.log(arr);
// }


//Task-4
//******

// let books = ['javascript',"php","python","java","c"];
// let text = "programming Hero";

// if(Array.isArray(books) !== Array.isArray(text)){
//     console.log("text is not array")
// }

// if(Array.isArray(books)){
//     if(!Array.isArray(text)){
//         console.log("text is not array");
//     }
// }
 
// if(Array.isArray(books)){
//    console.log('books variable is an array')
// }else if(!Array.isArray(text)){
//     console.log("text variable is not an array");
// }


//Task-5
//******


// let numbers = [1,2,3,4,5];
// let conc = numbers.concat(6,7);
// console.log(numbers);
// console.log(conc);



//map() 
//*******************

//Task-6
//******

// ForEach
//**********

let numbers = [2,4,5,6,7,8];
let text = "";

function myFunction(value){
   text += value + '\n'
}
 numbers.forEach(myFunction);
console.log(text);






















































// Step 1: Create different variables, each containing either an array or a non-array value

// let arrayVar = [1, 2, 3];             // Array
// let stringVar = "Hello, World!";      // String
// let numberVar = 42;                   // Number
// let objectVar = { name: "Alice" };    // Object
// let booleanVar = true;                // Boolean
// let nullVar = null;                   // Null
// let undefinedVar;                     // Undefined
// let arrayVarEmpty = [];               // Empty Array

// // Step 2: Use isArray to check if each variable is an array
// function checkIfArray(variable, variableName) {
//     if (Array.isArray(variable)) {
//         console.log(`${variableName} is an array.`);
//     } else {
//         console.log(`${variableName} is NOT an array.`);
//     }
// }

// // Step 3: Print a message to the console indicating whether each variable is an array or not
// checkIfArray(arrayVar, "arrayVar");
// checkIfArray(stringVar, "stringVar");
// checkIfArray(numberVar, "numberVar");
// checkIfArray(objectVar, "objectVar");
// checkIfArray(booleanVar, "booleanVar");
// checkIfArray(nullVar, "nullVar");
// checkIfArray(undefinedVar, "undefinedVar");
// checkIfArray(arrayVarEmpty, "arrayVarEmpty");




// outPut
//---------


// arrayVar is an array.
// stringVar is NOT an array.
// numberVar is NOT an array.
// objectVar is NOT an array.
// booleanVar is NOT an array.
// nullVar is NOT an array.
// undefinedVar is NOT an array.
// arrayVarEmpty is an array.
