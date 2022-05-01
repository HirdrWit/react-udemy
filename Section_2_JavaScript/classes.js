class Human {
  constructor() {
    this.gender = "male";
    this.age = 0;
  }

  printGender() {
    console.log(this.gender);
  }

  printAge() {
    console.log(this.age);
  }
}

class Person extends Human {
  constructor() {
    super();
    this.name = "Rob";
    this.age = 25; // overwrite default <NEATO
  }

  printName() {
    console.log(this.name);
  }
}

// const p = new Person();
// p.printName();
// p.printGender();
// p.printAge();

/// MORE MODERN WAY
// ES7

class HumanV2 {
  gender = "male";
  age = 0;

  printGender = () => {
    console.log(this.gender);
  };

  printAge = () => {
    console.log(this.age);
  };
}

// class PersonV2 extends HumanV2 {
//   name = "Rob";
//   age = 25; // overwrite default <NEATO

//   printName = () => {
//     console.log(this.name);
//   };
// }

// const p2 = new PersonV2();
// p2.printName();
// p2.printGender();
// p2.printAge();
