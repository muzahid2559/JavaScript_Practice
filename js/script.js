// Primitive Types  deals with value and work at number, string, boolean
//difference address
let a = 7;
let b = a;

a = 45;
document.writeln(b);


// Reference Types  deals with address and work at array,object
//same address
let numbers = [1,2,3];
let newNumbers = numbers;
document.writeln(newNumbers);
numbers[1] = 500;
document.writeln(numbers);
document.writeln(newNumbers);