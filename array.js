arr = [1,6,8,3];
console.log(arr);

brr = [1,26,8,3];
n = brr.length;
console.log(n);

for(let i=0;i<n;i++){
    console.log(brr[i]);
}

// add at last
arr.push(9);
console.log(arr);

arr.push(0);
console.log(arr);

// remove at last
arr.pop();
console.log(arr);


// add at starting
arr.unshift(2);
console.log(arr);

// remove first element
arr.shift();
console.log(arr);