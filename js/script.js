// For-in string/array/object
// For-of string/array
let name = "I am learning Javascript!";
let food = ["Cake", "Chocolate", "Ice Cream"];

//object doesn't have index
let person = {
    name: "Shakib Al Hasan",
    profession: "Cricketer",
    team: "Bangladesh",
    age: 33,
}

// We will get index
 for( var x in name ) {
    document.writeln(`index ${x} and item ${ name[x] }` );
} 


// We will get items/values
for(var x of name ) {
    document.writeln(x);
}

// We will get indexes
for (var y in food) {
    document.writeln(`Index: ${y}; and item: ${food[y]}`);
}

// We will get items
for (var y of food) {
    document.writeln(y);
}


// For-in with objects
for (var x in person) {
    document.writeln(`Property: ${x}
    Value: ${person[x] }`);
}

// For-of won't work for objects