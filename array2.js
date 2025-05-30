// const arr = [2,8,3,3];
// arr.push(3);
// console.log(arr )


// Forof loop..!!!


brr = [3,7,3,8,0,2];
for(const ele of brr){
    console.log(ele);
}

// change in double array....c

brr = [3,7,3,8,0,2];
console.log(brr);
for(let i=0;i<brr.length;i++){
    brr[i] *= 2;
}
console.log(brr); 

// forEach loop...

brr = [3,7,3,8,0,2];
brr.forEach((ele,i,brr )=> {
    console.log(ele,i,brr);
});