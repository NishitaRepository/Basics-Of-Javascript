// basically hamne ek array bnaya uske bad hamne dusra array bnaya wo dusra array first array ke double hona chiaye --> map me use hota h..!!

// let arr = [1,6,3,8];
// console.log(arr);
// let brr = [];
// for (const ele of arr) {
//     brr.push(ele*2);
// }
// console.log(brr);

// first tarikaa
// function add10(ele){
//     return ele+10;
// }
// let arr = [1,6,3,8];
// console.log(arr);
// // arr = arr.map(add10);
// // console.log(arr);

// // second tarika
// arr = arr.map(function(ele){
//     return ele*ele;
// });
// console.log(arr)

// third tarika
// arr = arr.map((ele)=>{
//     return ele/10;
// })
// console.log(arr);

// // fouth tarika
// arr = arr.map(ele => ele*2);
// console.log(arr);

let arr = [1,6,3,8];
arr = arr.map(function(ele){
    return ele*2;
});
console.log(arr);
