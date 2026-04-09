const array = [1,2,3,4,5,6,7];

const newArray = [];

array.forEach((value, index) => {
  newArray[index] = value **2;
})

console.log("Array:" + array);
console.log("New array:" + newArray);
