const sum = (...numbers) => numbers.reduce((total, number) => total + number, 0);
const curriedSum = curry(sum);

console.log(curriedSum()); // 0
console.log(curriedSum(1)()); // 1
console.log(curriedSum(1)(2)()); // 3
console.log(curriedSum(1, 2)(3)(4, 5, 6)()); // 21
console.log(curriedSum(1)); // [Function]
console.log(curriedSum(1, 2)(3)); // [Function]
