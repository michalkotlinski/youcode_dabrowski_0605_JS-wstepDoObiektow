const person = {
    name: "Michał",
    surname: "Kotliński",
    age: 47,
    sayHello: function () {
        console.log(`Cześć! Nazywam się ${this.name} ${this.surname} i mam ${this.age} lat.`);
    }
};