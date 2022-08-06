// Arrays(Data Types)

//Collection of items
var countries = ["Bangladesh", "USA", "UK"]
document.writeln(countries);
document.writeln(countries[0]);
document.writeln(countries[1]);

var country = countries[0]


//Mutable
countries[0] = "Poland"
document.writeln(countries);
document.writeln(countries.length);

//Push and Pop
countries.push("China"); // return length
document.writeln(countries);

countries.pop(); // returns length
document.writeln(countries);

countries.push("Japan", "Srilanka");
document.writeln(countries);

countries.shift() //returns the shifted
document.writeln(countries);

countries.unshift("Germany") // returns length
document.writeln(countries);


//Empty array
var numbers;
numbers = []
document.writeln(numbers);

numbers.push(1)
document.writeln(numbers);
numbers.push(78)
document.writeln(numbers);
numbers.push("One")
document.writeln(numbers);


x = "Bangladesh"
var y = x.split("")
document.writeln(y);
x = "Bangladesh is a country"
y = x.split("")
document.writeln(y);
y = x.split("n")
document.writeln(y);
z = x.split(" ")
document.writeln(z);
x = "Bangladesh, China, Finland"
y = x.split(",")
document.writeln(y);

z.toString()
document.writeln(z);
z.join("/")
document.writeln(z);

countries.sort()
document.writeln(countries);

countries.reverse()
document.writeln(countries);