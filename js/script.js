// FUnction parameter/argument

function saySomenthing(fname = "Muzahidul", lname = "Islam") {
    document.writeln(`Hello ${ fname } ${ lname }!`);
}
saySomenthing();

let firstname = "Moshiur";
let lastname = "Rahman";
saySomenthing(firstname,lastname);


//Return value
function addNum(a=0, b=0) {
    document.writeln(`${ a } + ${ b } = ${a+b}`);
    return a+b;
}
let sum = addNum(4,5)
document.writeln(sum);
let y = addNum(3.6, 2.3);
document.writeln(y);