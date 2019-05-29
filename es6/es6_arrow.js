const square = x => x * x;
console.log('square of 3 = ', square(3));

function squareOld(x) {
    return x * x;
}
console.log('old square of 5 = ', squareOld(5));

const arr = [1, 4, 7, 3, 5];
const arr2 = arr.filter(v => v % 2 !== 0)
    .map(v => square(v));
console.log(arr2);
