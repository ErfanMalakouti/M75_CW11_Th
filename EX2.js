let hamster = {
    stomach: [],
    eat(food) {
        this.stomach = [...this.stomach,food];
    }
};
let speedy = {
    __proto__: hamster
};
let lazy = {
    __proto__: hamster
};
speedy.eat("apple");
speedy.eat("talebi");
lazy.eat('noon')
console.log(speedy.stomach);
console.log(lazy.stomach); 
console.log(hamster.stomach);