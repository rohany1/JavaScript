tipper("15"); //function hoisting
function tipper(a){
    var bill=parseInt(a);
    console.log(bill+5);
}
bigTipper("100"); //function hoisting
//the below one is variable
//variable declarations are scanned and made undefined
// var bigTipper=function (a){
//     var bill=parseInt(a);
//     console.log(bill+50);
// }
function bigTipper(a){
    var bill=parseInt(a);
    console.log(bill+50);
}
tipper(10);
bigTipper(200);

console.log(name);  //it will show undefined as in variable hoisting 
//variables are scanned but are undefined
var name="Rohan yadav";
console.log(name);

sayName();
function sayName(){
    var name="Rohan";
    console.log(name);
}
sayName();