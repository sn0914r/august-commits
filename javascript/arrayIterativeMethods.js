const nums = [3, 4, 5, 6, 7, 2]

// map
const squaredNums = nums.map(e=>e**2);
console.log(squaredNums);

// forEach
nums.forEach(e=>console.log(e**2));

// filter
let events = nums.filter(e=>e%2==0);
console.log('');

// reduce()
const totalSum = nums.reduce((acc, cur)=>acc+cur, 0);
console.log(totalSum)

// every
const isAllEven = nums.every(e=>e%2);
console.log(isAllEven);

// some
const isSomeEven = nums.some(e=>e%2);
console.log(isSomeEven);

// find
const element = nums.find(e=>e==="tiGor");
console.log(element)

// findIndex
const index = nums.findIndex(e=>e==="tiGor");
console.log(index)