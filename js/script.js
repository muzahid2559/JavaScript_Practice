// Sub Class
// Inheritance

class Person { //Base Class
    constructor(fname, lname) {
        this.firstname = fname;
        this.lastname = lname;
    }

    greeting() {
        return `Hello ${this.firstname} ${this.lastname}!`;
    }
}

class Customer extends Person { //Sub Class
    constructor(fname, lname, phone, memberShip) {
        super(fname, lname);

        this.phone = phone;
        this.memberShip = memberShip;
    }

    fullname() {
        document.writeln(this.firstname, this.lastname);
    }
}

let person1 = new Person("Fazle", "Rahat");
document.writeln(person1);
document.writeln(person1.greeting());


let customer1 = new Customer("Rony", "Chy", "017777778888", "1234");
document.writeln(customer1);
document.writeln(customer1.greeting());
document.writeln(customer1.fullname());