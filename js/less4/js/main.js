let str = "Hello world";
let strValue = str.charAt(0);
// if (strValue === "H") {
//     console.log("The string starts with letter \'H\'");
// }
for(let i = 0; i < str.length; i++) {
    let strvalue = str.charAt(i);
    if (strvalue === "d"){
        console.log("We found letter \'d\'");
    }
}

let a = " ";
let b = "  ";
if(a === b){
    console.log('yes');
}else{
    console.log('no');
}

let str1 = "Please visit MICROSOFT and Microsoft";
let n = str1.replace(/Microsoft/ig, "W3School");
console.log(n);

var str5 = "Hello";
var str6 = "world!";
var str7 = "Have a nice day!";
console.log(str5.concat(" ", str6, " ", str7));