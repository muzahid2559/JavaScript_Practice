// Global Scope
var a = 1;
let b = 2;
const c = 3;

document.writeln(`Global Scope: `, a, b, c);

function test() {
    var a = 4;
    let b = 5;
    const c = 6;
    document.writeln(`Functions or Local Scope: `, a, b ,c);
}
test();
document.writeln(`Global Scope: `, a, b, c);




if (true) {
    var a = 7;
    let b = 8;
    const c = 9;
    document.writeln(`If Scope: ` , a, b, c);
}

document.writeln(`Global Scope: `, a, b, c);


for (let a = 0; a <10; a ++) {
    document.writeln(`Loop: `, a);
}

document.writeln(`Global Scope: `, a, b, c);