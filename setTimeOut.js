//  print 1 to 10 bit with delay of 1 sec after each number gets printed


// function hello(){
//     console.log("hello");
// }
// function melloo(){
//     console.log("mello");
// }

// setTimeout(hello,2*1000);
// setTimeout(melloo,3*1000);



// setTimeout(function(){
//     console.log("hello");
// },2*1000);
// setTimeout(function(){
//     console.log("mello");
// },3*1000);
// setTimeout(function(){
//     console.log("aur bhai");
// },5*1000);

// 1 to 10
for(let i=1;i<=10;i++){
    setTimeout(function(){
        console.log(i);
    },i*1000);
}
// 10 to 1

// for(let i=1;i<=10;i++){
//     setTimeout(function(){
//         console.log(11-i);
//     },i*200);
// }