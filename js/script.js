// Object Method
let person = {
    firstname: "Fazle",
    lastname: "Rahat",
    dob: "9-10-1995", //number, string, date, array, object

    fullname: function() { //Method
        return `${this.firstname} ${this.lastname}`;
    }

}

document.writeln(person.firstname);
document.writeln(person.fullname());

let str = "Muzahidul Islam";
document.writeln(str.length);
document.writeln(str.split());