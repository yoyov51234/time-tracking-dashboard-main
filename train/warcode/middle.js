function getMiddle(s) {
  //Code goes here!
  if (s.length % 2 === 0) {
    //     even
    return s.substr(s.length / 2 - 1, 2);
  } else {

    return s.substr(Math.floor(s.length / 2), 1)
  }
}

// console.log(getMiddle('testing'));;


console.log(Math.ceil(3));
// function getMiddle(s) {
//   //Code goes here!
//   if (s.length % 2 === 0) {
//     //     even
//     return s.splice(s / 2, 2);
//   } else {
//     return s.splice(s / 2 + 1, 1)
//   }
// }

// console.log(getMiddle('testing'));;