const a = 42;
let b = 3;

// a = 13; // Cannot reassign CONST value
b = 11;

console.log(a, b);

const aa = { aa1: 'val', aa2: 'val2' };

// aa = {newAa1: 'New val'}; // cannot reassign CONST
aa.bbbb = 'edited';
console.log(aa);
