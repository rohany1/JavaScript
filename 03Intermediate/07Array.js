var countries=["India","Australia","USA","UK","Japan"];
var states=new Array("Rajasthan","Kerala","Punjab","Uttrakhand","Assam");

//console.log(states);

//console.log(states[0]);
//console.log(states.length);
states[0]="Gujarat";

//console.log(states[0]);

var user=["Rohan","rohan@gmail.com",3,34,true]; //Difffernt Datatypes
//console.log(user);
user.pop();
//console.log(user);
user.unshift("NEW VALUE");//insert the value in front of array at position 0
//console.log(user);
user.shift();//pop the value from front of array
console.log(user);
//console.log(user.length);
console.log(user.indexOf(3));
console.log(user.indexOf("rahul"));//return -1

console.log(Array.from("ROHAN"));