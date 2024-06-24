let a = 5;
function factorial(number) {
  let arr = Array.from(Array(number + 1).keys());
  let c = arr.slice(1).reduce((a, b) => {
    return a * b;
  });
  console.log(c);
}
factorial(a);



// const fetchdata=()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {

//             let data = {
//                 name:"Muhammad Huzaifa",
//                 age:19
//             };
//             if (data.age>=18) {
//                 resolve(data);
//             }
//             else reject("Not allowed")
//         }, 2000);
//     })
// }

// fetchdata()
// .then(
//     (data)=>{
//         console.log("Data received", data);
//     },
//     (error)=>{console.log(error)}
// )
// .catch((error)=>{
//     console.error("Error", error);
// })
// .finally(()=>{
//     console.log("Finally");
// });

// console.log("Hello World");
// fetchdata();
// console.log("This is the line after method call");
