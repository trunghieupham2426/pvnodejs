// const user = {};
// user.name = "David";
// user.surname = "Xuan";

// user.name = "cafe";
// delete user.name;

// function isEmpty(obj) {
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) return true;
//   }
//   return false;
// }

// console.log(isEmpty({ name: "joe" }));

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;

// Object.values(salaries).forEach(function (el) {
//   sum += el;
// });

// console.log(sum);

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu cafedev",
// };

// for (let key in menu) {
//   if (typeof menu[key] === "number") {
//     menu[key] *= 2;
//   }
// }

// console.log(menu);

const data = {
  name: "hieu",
};

localStorage.setItem("test", JSON.stringify(data));

const localData = localStorage.getItem("test");
console.log(JSON.parse(localData));

sessionStorage.setItem("sst", JSON.stringify(data));
const ssData = sessionStorage.getItem("sst");
console.log(JSON.parse(ssData));
