class Person {
    constructor(name, age) {
        this.Name = name
        this.Age = age
    }

    set name(string) {
        this.Name = string
    }

    get name() {
        return this.Name
    }

    walk() { // function
        return(`${this.Name}, ${this.Age} years old, is walking`)
    }
}

let person = new Person('Peter', '18')

console.log(person.walk())
person.name = 'John'
console.log(person.name)