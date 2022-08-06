//Exercise 03
//Sum of the series of square numbers

var n = parseInt(prompt("Enter the number of terms: "));
var sum = 0;
var series = "";

for (var i = 1; i <= n; i++) {
    sum += i ** 2;
    series += (i ** 2).toString();
    series += " + ";
    if (i == n) { continue; }
    
}

document.write(`${series} = ${sum}`);