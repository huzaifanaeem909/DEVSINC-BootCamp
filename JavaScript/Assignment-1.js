const nameArray = "Muhammad Huzaifa";

console.log("Using a for loop:");
for (let i = 0; i < nameArray.length; i++) {
  console.log(nameArray[i]);
}

console.log("\nUsing a while loop:");
let j = 0;
while (j < nameArray.length) {
  console.log(nameArray[j]);
  j++;
}

console.log("\nUsing a do-while loop:");
let k = 0;
do {
  console.log(nameArray[k]);
  k++;
} while (k < nameArray.length);

console.log("\nUsing a for-of loop:");
for (const char of nameArray) {
  console.log(char);
}
