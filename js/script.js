// Normal Declaration
function saySomething(name) {
    console.log('Hello ' + name);
}

// Function Expression

let saySomething1 = function(name2) {
    console.log('Hello ' + name2);
}

// Arrow Function (ES6)

let saySomething2 = (name3) => {
    console.log("I am " + name3);
}


saySomething("Khandakar");
saySomething1("Muzahidul Islam");
saySomething2("JavaScript");