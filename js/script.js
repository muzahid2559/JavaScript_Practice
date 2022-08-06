// String and array iteration
let name = "I am learning Javascript!";
let food = ["Cake", "Chocolate", "Ice Cream"];
let len = food.length;

for(var i = 0; i < len; i++) {
    document.writeln(`Index : ${i}`);
    document.writeln(food[i]); 
}