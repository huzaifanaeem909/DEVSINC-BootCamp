// let char = "abcdefghijklmnopqrstuvwxyz";

// for (let i = 0; i < char.length; i++) {
//   switch (char[i]) {
//     case "a":
//       console.log(char[i]);
//       break;
//     case "e":
//       console.log(char[i]);
//       break;
//     case "i":
//       console.log(char[i]);
//       break;
//     case "o":
//       console.log(char[i]);
//       break;
//     case "u":
//       console.log(char[i]);
//       break;
//     default:
//       continue;
//   }
// }

let obj1 = {
  1: "Crazy",
  2: "Amazing",
  3: "Fire",
};
let obj2 = {
  1: "Engine",
  2: "Foods",
  3: "Garments",
};
let obj3 = {
  1: "Bros",
  2: "Limited",
  3: "Hub",
};

var ran1 = Math.floor(Math.random() * 3) + 1;
var ran2 = Math.floor(Math.random() * 3) + 1;
var ran3 = Math.floor(Math.random() * 3) + 1;

console.log(obj1[ran1] + " " + obj2[ran2] + " " + obj3[ran3]);


