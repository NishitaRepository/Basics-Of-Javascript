// reduce basically use a pair like 1+9=10 then 10+2=12 then 12+7 =19 then 19+4 =23  then 23+5=28 then 28=6=34 then 34+2=36 then 36+8=44

let arr = [1,9,2,7,4,5,6,2,8];
console.log(arr);

let x = arr.reduce(function(a,b){
    return a+b;
});
console.log(x);