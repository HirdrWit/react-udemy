const my_name = "Rob";
let my_age = 25;

console.log(my_name, my_age);

// Normal Func
function printmyName(name) {
  console.log(name);
}

// arrow func
const printMyNameV2 = (name) => {
  console.log(name);
};

printMyNameV2(my_name);

// single line
const multiply = (number) => number * 2;
console.log(multiply(2));
