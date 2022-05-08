let animal = {
    get Age() {
        return this.age
    },
    get Height() {
        return this.height
    },
    get Weight() {
        return this.weight
    }
}
rabbite = {
    __proto__: animal,
    weight: "5Kg",
    height: "30cm",
    age: 2
}
console.log(rabbite.Height);