// const str = "JavaScript";
// console.log(str.match(/[A-Z]/g));


// Task 6: Match All Alphanumeric Characters
// Match All Non - Alphanumeric Characters
// const str = "Hello, World!";
// console.log(str.match(/\W/g));

const str = "Hello World";
console.log(str.match(/\b\w+\b/g));
console.log(str.match(/\b/g));