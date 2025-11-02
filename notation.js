// const startTime = performance.now();

for (i = 0; i <= 500; i++){
    // console.log(i)
}

// const endTime = performance.now();

// console.log(`This code took ${endTime - startTime} ms to run`);

// This is try to give u exact amount time like 14.924235234


// console.time("Task");
for (i = 0; i <= 200; i++){
    // console.log(i)
}
// console.timeEnd("Task");  // Task: 9.12ms will show you a time like this.



const firstArray = [];
const secondArray = [];

for(let i = 0; i <= 600000; i++){
    if(i <= 300000){
        firstArray.push(i);
    }
    secondArray.push(i);
}
console.log("First Array", firstArray.length);
console.log("Second Array", secondArray.length);

console.time("map1");
const firstUserList = firstArray.map((number) => ({ userId : number}))
console.timeEnd("map1");

console.time("map2");
const secondUserList = secondArray.map((number) => ({ userId : number}))
console.timeEnd("map2");

//This is linear growth, it will show double time to count.

console.time("find");
// const user = secondUserList.find((user) => user.userId === 500000); // will take more time to find from 50 to 500000
// we can use this way
const user = secondUserList[40000];
console.timeEnd("find");


