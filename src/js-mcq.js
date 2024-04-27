// 1.	What is the output of 
// function f1() {
//      console.log(“this is”, this);
//      console.log(“arguments is”, arguments);
//  }
//  f1()

// Choices are 
// a.	Null, null
// b.	Undefined, undefined
// c.	global, arguments
// d.	f1, undefined

//Answer: c. global, arguments





// 2) in the above function f1, I do the following

// let f11 = f1.bind({a:1}, 'abc');
//  f11('def');

// What is the output now ?

// Choices are 
// e.	Null, null
// f.	Undefined, undefined
// g.	{a:1}, arguments = [“abc”, “def”]
// h.	{a: 1}, arguments = [“def”]


//Answer: g. {a:1}, arguments = ["abc", "def"]





// 3) Write a simple function that will split an array into chunks with a specified size. 
// Example - array = [1,2,3,4,5]
// chunkSize = 1 output = [1] [2] [3] [4] [5]
// chunkSize = 2 [1, 2] [3, 4] [5]
// chunkSize = 3 [1, 2, 3] [4, 5] 
// chunkSize = 4 [1, 2, 3, 4] [5] 
// chunkSize = 5 [1, 2, 3, 4, 5]
// chunkSize = 6 [1, 2, 3, 4, 5]


// Function signature is
// function (array, chunkSize) {
// //TODO: implement this.
// }

//Answer: 

// function Array(array, chunkSize) {
//     if (chunkSize <= 0) {
//         return 'Chunk size should be a positive integer';
//     }

//     const result = [];
//     for (let i = 0; i < array.length; i += chunkSize) {
//         result.push(array.slice(i, i + chunkSize));
//     }
//     return result;
// }

// const array = [1, 2, 3, 4, 5];
// console.log(Array(array, 1)); // [[1], [2], [3], [4], [5]]
// console.log(Array(array, 2)); // [[1, 2], [3, 4], [5]]
// console.log(Array(array, 3)); // [[1, 2, 3], [4, 5]]
// console.log(Array(array, 4)); // [[1, 2, 3, 4], [5]]
// console.log(Array(array, 5)); // [[1, 2, 3, 4, 5]]
// console.log(Array)(array, 6)); // [[1, 2, 3, 4, 5]]

