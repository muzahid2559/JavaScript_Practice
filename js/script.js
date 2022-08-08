let re;
let str;
// Literal Character
re = /hello/;
re = /hello/i;
re = /hell/i;
re = /lo W/i;
re = /loW/i;

// Meta Characters
re = /^hello/; // Must start with   (^ = keret sebble)
re = /hello$/; // Must end with
re = /world$/;
re = /^hello$/; // Must start and end with
re = /^h.llo$/; // Matches any one character (. ar akhane je kono akta character thakei hbe)
re = /h.llo/;              
re = /h*llo/; // 0 or more times (* ar akhane je kono  character thakeo hbe,na thakleo hbe)
re = /he?a?llo/; // Optional (? ar age ja thakbe sudu seta thakteo pare abar nao pare but oikhane onno kichu thakte pabe na)
re = /hello\?/; // escaping  (qustion mark tao akta character. so, hello? thaklei macth korbe)  

str = "Again hello World";
str = "hello hello";
str = "hello";
str = "hallo";
str = "hillo";
str = "h llo";
str = "hllo";
str = "hillo worlde";
str = "hello worlde";
str = "hillo";
str = "hilo";
str = "hhfsdhfsuillo";
str = "hello";
str = "hllo";
str = "hallo";
str = "htllo";
str = "heallo";
str = "hello";
str = "hallo";
str = "hllo";
str = "hello";
str = "hello?";


console.log(re.exec(str));
reTest(re, str);

function reTest(re, str) {
    if(re.test(str)) {
        console.log(`'${str}' matches '${re.source}'`);
    }
    else {
        console.log(`'${str}' doesn't match '${re.source}'`);
    }
}