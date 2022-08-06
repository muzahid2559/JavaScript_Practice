//Conditions(if else)

  
//Find Age
  var age = prompt();
  
  if ( age >= 50 ) {
       document.writeln("Old!");
  } else if ( age < 50 && age >= 30 ) {
    document.writeln("Under 50 but above or equal 30!")
  } // 30 <= age < 50
  else if (age < 30 && age >= 18 ) {
    document.writeln("Under 30 but above or equal 18");
  } else if ( age < 18 && age > 0) {
    document.writeln("Under 18!");
  } else {
    document.writeln("Invalid Input!");
  }
  
  


  //Find the largest number
  var n1 = prompt("First Number: ");
  var n2 = prompt("Second Number: ");
  var n3 = prompt("Third Number: ");
  
  n1 = parseInt(n1);
  n2 = parseInt(n2);
  n3 = parseInt(n3);
  
  if (n1 >= n2) {
      if (n1 >= n3) {
        document.writeln(n1 + " is the largest!");
      }
      else {
        document.writeln(n3 + " is the largest!");
      }
  } else {
      if (n2 >= n3) {
        document.writeln(n2 + " is the largest!");
      }
      else {
        document.writeln(n3 + " is the largest!");
      }
  }