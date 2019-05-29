const animal = {
    say: function () {
        console.log(this.name, 'say', this.voice);
    }
};

const dog = {
    name: 'dog',
    voice: 'woof'
};

const cat = {
    name: 'cat',
    voice: 'meow'
};

// Don't use this ----- not optimized!!!
Object.setPrototypeOf(dog, animal);
Object.setPrototypeOf(cat, animal);

dog.say();
cat.say();

// Better to use Object.create --------
function createAnimal(name, voice) {
    const createdAnimal = Object.create(animal);
    createdAnimal.name = name;
    createdAnimal.voice = voice;
    return createdAnimal;
}

const dog2 = createAnimal('doggy', 'woof-woof');
const cat2 = createAnimal('catty', 'meow-meow');
dog2.say();
cat2.say();

// use new and prototype -----
function Animal(name, voice) {
    this.name = name;
    this.voice = voice;
}

Animal.prototype.say = function () {
    console.log(this.name, 'say', this.voice);
}

const dog3 = new Animal('Doggy', 'woof-woof-woof');
const cat3 = new Animal('Catty', 'meow-meow-meow');
dog3.say();
cat3.say();