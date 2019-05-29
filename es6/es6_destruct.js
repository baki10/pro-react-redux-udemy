const person = {
    name: {
        first: 'Baki',
        last: 'Goal'
    },
    age: 31
};

const { name: { first: firstName, last: lastName, middle: middleName = 'Default_Middle_Name' } } = person;
const { permissions: { role = 'user' } = {} } = person;

console.log(firstName, lastName, middleName, role);


const arr = [1, 2, 3, 4, 5, 6];
const [, a, , b, c] = arr;
console.log(a, b, c);


const dict = {
    duck: 'quack',
    cat: 'meow',
    dog: 'woof',
    lion: 'meow'
};

const res = Object.entries(dict)                // [['duck','quack'],[]...]
    .filter(([, value]) => value === 'meow')
    .map(([key]) => key);

console.log(res);


const shape = {
    type: 'segment',
    coords: {
        start: [0, 5],
        end: [25, 52]
    }
};

const { coords: { start: [x1, y1], end: [x2, y2] } } = shape;
console.log(x1, y1, x2, y2);
