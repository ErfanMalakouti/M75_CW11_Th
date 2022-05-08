const personStore = {
    greet() {
        return 'hello';
    },
    introduce() {
        return `Hi, my name is ${this.name}`
    }
}
personStore.greet()

function PersonFromPersonStore(name, age) {
    this.name = name
        this.age = age
}
const sandra =  new PersonFromPersonStore("Sandra", 26)
sandra.__proto__ = personStore

console.log(sandra.age);
console.log(sandra.greet());
console.log(sandra.introduce());


