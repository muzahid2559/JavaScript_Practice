// Static Function

class Person {
    constructor(fname, lname) {
        this.firstname = fname;
        this.lastname = lname;
    }

    greeting() {
        return `Hello ${this.firstname} ${this.lastname}!`;
    }

    static test() {
        document.writeln("I am staic!");
    }
}

let person1 = new Person("Muzahidul", "Islam");

document.writeln(person1.greeting());
document.writeln(Person.test());