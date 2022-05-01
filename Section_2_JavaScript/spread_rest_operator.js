// spread operator == ...

// we do this in golang

// spread - used to split up array elements OR object properties
let oldArr = [0];
const newArr = [...oldArr, 1, 2];
console.log(newArr); // [0,1,2]

// rest - used to merge a list of function arguments into an array
function sortArgs(...args) {
  return args.sort();
}

// object example with spread

const person = {
  name: "Rob",
};

const newPerson = {
  ...person,
  age: 25,
};

console.log(newPerson);

// object example with rest
const filter = (...args) => {
  return args.filter((el) => el === 1);
};

console.log(filter(1, 2, 3));
