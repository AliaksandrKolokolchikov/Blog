//let numberFirst = "5";
//let numberSecond = 6;
//let numberThree = 7;
//let numberFour = 8;
//let numberFive = 9;
//++numberFirst;
//const checkTypeOf = (argument) => {
// if (typeof argument === "string") {
//   console.log("yes");
// } else if (typeof argument === "number") {
//   console.log("no");
// } else {
//   console.log("smile");
// }
//};
//checkTypeOf(numberFirst);

//let conter = 0;
//let maxNumber = 10;
//const counterLogger = (minConter, maxNumbers) => {
//  for (minConter = 0; minConter <= maxNumbers; minConter++) {
  //  console.log(minConter);
 //   if (minConter === 5) {
  //    console.log("Середина");
  //  }
  //  if (minConter === maxNumbers) {
  //    console.log("Конец");
  //  }
 // }
//};
//counterLogger(conter,maxNumber);

let string = "hello"
const arr = string.split("");
const newString = (arg) => {
  const newARr = [];
  for (let i = 0; i <= arg.lenght; i++) {
    if (arg[i] === "l") {
    newARr.push("h");
    }else newARr.push(arg[i]);
  }
  return newARr.join("");
};



