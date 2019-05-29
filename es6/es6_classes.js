// function Animal(name, voice) {
//     this.name = name;
//     this.voice = voice;
// }

// Animal.prototype.say = function () {
//     console.log(this.name, 'say', this.voice);
// }

// const dog = new Animal('Dog', 'woof-woof');
// dog.say();

class Animal {
    constructor(name, voice) {
        this.name = name;
        this.voice = voice;
    }

    say() {
        console.log(this.name, 'say', this.voice);
    }
}

// duck -> Bird.prototype -> Animal.prototype -> Object.prototype -> null
class Bird extends Animal {
    constructor(name, voice, canFly) {
        super(name, voice);
        this.canFly = canFly;
    }
    fly() {
        console.log(`I can${this.canFly ? '' : ' not'} fly`);
    }
}

const duck = new Bird('Duck', 'quack');
duck.say();
duck.fly();

const eagle = new Bird('Eagle', 'yohoho', true);
eagle.say();
eagle.fly();