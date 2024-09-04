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


//Task-6
//******

// const colors = ['red', 'blue', 'green', 'yellow', 'orange']
// let reverse_color = [];
// for(let color of colors){
//     console.log(color);
//     reverse_color.unshift(color);
// }
// console.log(reverse_color);


// const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
// let reverse_color = [];
// for(let i = 0; i < colors.length; i++){
//     console.log(colors[i]);
//     reverse_color.unshift(colors[i]);
// }

// console.log(reverse_color);


// const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

// for(let i = colors.length -1; i >= 0; i--){
//     console.log(colors[i]);
// }


//Task-7
//******

// const numbers = [12, 98, 5, 41, 23, 78, 46];
// let even_numbers = [];
// for(let even of numbers){
//     if(even %2 == 0){
//         even_numbers.push(even);
//     }
// }
// console.log(even_numbers);


//Task-8
//******

// var str = ['Tom', 'Tim', 'Tin', 'Tik'];
// let text = ""

// for(let jog of str){
//     text += jog;
// } 
// console.log(text);


// var array = ['Tom', 'Tim', 'Tin', 'Tik'];
// let text = ""

// for(let i = 0; i < array.length; i++){
//     // text = array[0].concat(array[1],array[2],array[3]);
//     text += array[i];
// }
// console.log(text);


//Task-9
//******

const statement = 'I am a hard working person';
let array = statement.split(" ").reverse();
console.log(array);
let convertStr = array.join(' ');
console.log(convertStr);


//Task-10
//******

// ForEach-1
//**********

// let numbers = [2,4,5,6,7,8];

// function myFunction(value, index, array){
//    console.log(value + value);
//    console.log(index);
//    console.log(array);
// }

// numbers.forEach(myFunction);


// ForEach-2
//**********

// let numbers = [2,4,5,6,7,8];
// let text = "";

// function myFunction(value){
//    text += value + '\n'
// }
//  numbers.forEach(myFunction);
// console.log(text);


//map-1
//****
// let numbers = [2,4,5,6,7,8];

// function myFunction(value, index, array){
//    console.log(value + value);
//    console.log(index);
//    console.log(array);
// }

// numbers.map(myFunction);



//map-2
//****


// let numbers = [2,4,5,6,7,8];

// function myFunction(value){
//    return value + 2;
// }
// let number = numbers.map(myFunction);
// console.log(number);


//filter-1
//*******

// const numbers = [45, 4, 9, 16, 25];
// const over18 = numbers.filter(myFunction);

// function myFunction(value, index, array) {
//   return value > 10;
// }
// console.log(over18);


//reduce-1
//*******

// const numbers = [45, 4, 9, 16, 25];
// let sum = numbers.reduce(myFunction);

// document.getElementById("demo").innerHTML = "The sum is " + sum;

// function myFunction(total, value, index, array) {
//   return total + value;
// }



//reduce-2
//*******

// const numbers = [45, 4, 9, 16, 25];
// let sum = numbers.reduce(myFunction);

// document.getElementById("demo").innerHTML = "The sum is " + sum;

// function myFunction(total, value) {
//   return total + value;
// }














// map a return kora jai but forEach a 'return' kora jai na ar return korle undefined dakhai. and map akta array return kore but forEach just item ke return kore.




// Here are five key differences between the `forEach` and `map` methods in JavaScript:

// 1. **Purpose**:
//    - **`forEach`**: Used to iterate over each element in an array and execute a function for each element. It is typically used for side effects (e.g., modifying elements, logging, etc.).
//    - **`map`**: Also iterates over each element in an array, but it creates a new array with the results of applying a function to each element. It's used when you want to transform the array into a new one.

// 2. **Return Value**:
//    - **`forEach`**: Does not return anything; it returns `undefined`.
//    - **`map`**: Returns a new array with the transformed elements.

// 3. **Chaining**:
//    - **`forEach`**: Since it returns `undefined`, it cannot be chained with other array methods like `filter`, `reduce`, etc.
//    - **`map`**: Can be chained with other array methods since it returns a new array.

// 4. **Original Array Modification**:
//    - **`forEach`**: Can modify the original array if the callback function modifies the elements.
//    - **`map`**: Does not modify the original array; it creates a new array based on the callback function.

// 5. **Use Case**:
//    - **`forEach`**: Best used when you need to perform an operation on each element without needing a new array.
//    - **`map`**: Best used when you want to create a new array from the existing one, with each element transformed by the function.




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
