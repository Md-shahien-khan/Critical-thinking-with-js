// set, in set you can add but u cant add duplicate.
const set = new Set();

// adding something in set
set.add("aminul ");
set.add("Fatima Vondo");
set.add("Rubina Developer");
set.add("Shawon Bekar");

// console.log(set);
// console.log(set.size);
// set.size will show the eaxct amount o items u have.

const mySet = new Set();

// Add values
mySet.add('apple');
mySet.add('banana');
mySet.add('apple'); // duplicate ignored

// console.log(mySet); // Set(2) { 'apple', 'banana' }

// Check if a value exists
// console.log(mySet.has('apple')); // true
// console.log(mySet.has('cherry')); // false

// Remove a value
mySet.delete('banana');
// console.log(mySet); // Set(1) { 'apple' }

// Get size
// console.log(mySet.size); // 1

// Iterate through a set
for (const item of mySet) {
//   console.log(item);
}
// 💡 Convert between Sets and Arrays
const arr = [1, 2, 2, 3];
const unique = [...new Set(arr)];
// console.log(unique); // [1, 2, 3]


const aminul = {userName : 'Aminul Islam'};
const kanij = {userName : 'kanij'};
const tonmoy = {userName : 'Tonmoy'};

const set2 = new Set();
set2.add(aminul);
set2.add(kanij);
set2.add(tonmoy);
set2.delete(aminul);


// console.log(set2.size);


const myArray = ["apple", "Mangoe", "banana", "apple"];
// const set3 = new Set(myArray);
// set3.forEach((value) => console.log(value)) // will show u each element
// const test = Array.from(set3) // will create an array [ 'apple', 'Mangoe', 'banana' ] like that.
// console.log(test);
const set4 = new Set(myArray);
// console.log(set4.has("apple"));
// console.log(set4.delete("apple"));

const friends = ['shawon', 'kanij', 'zohaib', 'dolan', 'shawon'];
// brute force or nomal way
// const removeDuplicate = (friends) =>{
//     const newArray = [];
//     friends.forEach((element) => {
//         if(!newArray.includes(element)){
//             newArray.push(element);
//         }
//     });

//     return newArray;
// }

// console.log(removeDuplicate(friends));


// adding set
const removeDuplicateSet = (friends) =>{
    const set = new Set(friends);
    return Array.from(set);
};

console.log(removeDuplicateSet(friends));

