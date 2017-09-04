const average = ((...num) => num.reduce((sum, next) => sum + next)/num.length);

console.log(average(1));
console.log(average(1, 3));
console.log(average(1, 3, 6, 6));