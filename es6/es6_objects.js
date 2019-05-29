const x = 15;
const y = 30;

const point = {
    x: x,
    y: y,
    draw: function () {
        console.log("Drawing");
    }
};

const pointEs6 = {
    x,
    y,
    draw() {
        console.log("Drawing ES6");
    }
};

console.log(point);
console.log(pointEs6);

//----------------------------------
const defaults = {
    host: 'localhost',
    dbName: 'blog',
    user: 'admin'
}

const opts = {
    user: 'john',
    password: 'pswd'
}

const res = Object.assign({}, defaults, opts);
console.log(res);

//--------------------------------------
const person = {
    name: 'Baki',
    friends: ['Boo', 'Foo']
}

const shallowCopy = Object.assign({}, person);
person.name = 'Aliya';
person.friends.push('Zoo');
console.log(person);
console.log(shallowCopy);
