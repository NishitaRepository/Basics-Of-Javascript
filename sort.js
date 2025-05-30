// sort basically change in ascending order 1,2,3,4,5,6,.....n

let arr = [1,9,2,7,4,5,6,2,8];
console.log(arr);

arr= arr.sort();
console.log(arr);

// change in decresing order...!!!
arr = arr.sort(function(a,b){
    return b-a;
});
console.log(arr);

// use arrow function..!!

arr = arr.sort((a,b)=> b-a);
console.log(arr);