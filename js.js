let a = 5;
let b = 6;
++a;
const bigger = (number) => {
  if (a == 5 || b == 6) {
    console.log("Правда");
  } else if (a == 7) {
    console.log("Неправда");
  }
};
console.log(bigger());
