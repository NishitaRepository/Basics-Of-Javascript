//  objects is kind of like hasmap or map / dictionary where we have key : value pairs

var details = ["Raghav",24,92.5,false];

let obj = {
    name:"Raghav",
    age:24,
    percentage:92.5,
    isMarried:false
};


console.log(obj);

for (const key in obj) {
        console.log(obj[key]);
}