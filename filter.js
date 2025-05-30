// filter bascically kuch element ko filter krke nikalna ho to fiklter use krte h jese evn=en no chaiye to odd ko nikal do

// filter out even elements;
let arr = [1,9,2,7,4,5,6,2,8];
console.log(arr);

let brr = arr.filter(function(ele){
    if(ele%2!=0) return true;
    else return false;
});
let crr = arr.filter(function(ele){
    if(ele%2==0) return true;
    else return false;
});
console.log(brr);
console.log(crr);

// ternanary operator..!!
arr = arr.filter((ele)=>{
    return (ele<7) ? true : false;
});
console.log(arr);