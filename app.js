// class Person {
//   constructor(name, birthday) {
//     this.name = name;
//     this.birthday = birthday;
//   }

//   get age() {
//     return 2020 - this.birthday;
//   }
// }

// let joe = new Person("joe", 1991);
// console.log(joe.age);

const Person = {
  calAge() {
    return 2009 - this.birthday;
  },
};

const joe = Object.create(Person);

console.log(joe);
