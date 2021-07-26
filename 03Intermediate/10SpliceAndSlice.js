//Whenever u type a range [a,b]
//a is inclusive 
//b is exclusive 
var user=["Ama","Rah","Sta","Sam","Rho","Yas"];
console.log(user.slice(1,3));

console.log(user);

user.splice(1,3,"hi");
//(a,b,c)=> a is from where to start
//b is the country of deletion to make
//c is string array u want to replaced 
console.log(user);