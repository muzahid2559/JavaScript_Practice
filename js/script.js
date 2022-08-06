// Strings(Data Type)
document.writeln("Hello World!");
document.writeln("Hello  \' World!");
document.writeln("Hello \\ World!");
let a = "Hello \t World!";
document.writeln(a);
document.writeln("Hello \n World!");


//length property
let z = "Hello World!";
document.writeln(z.length);

//Uppercase() and Lowercase() method
var b = "Hello World!";
document.writeln(b.toUpperCase());

var c = "Hello World!";
document.writeln(c.toLowerCase());

document.writeln(c[6]);

//slice = that means kata
var y = c.slice(2, 10);
document.writeln(y);

var p =  c.slice(-8, -2);
document.writeln(p);

//substr()
var p =  c.substr(8, 4);
document.writeln(p);

//replace
var p =  c.replace("ll","MM");
document.writeln(p);