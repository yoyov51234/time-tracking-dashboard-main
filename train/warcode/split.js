const str = "This is an example!";


const a = str.split(" ").map(item => [...item].reverse()).map(item => item.join("")).join(" ");
console.log(a);




// const a = 'ilikeyoueverymuch';

// console.log(a.split()
// );
// console.log();

// const b = a.split('').filter(
//   item => {
//     if (item === 'a' || item === 'e' || item === "i" || item === "o" || item == "u") {
//       return item;
//     }
//   }
// )
// console.log(b);