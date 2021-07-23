//Allow user to access course if he is
//logged in from Google
//Logged in from Email
//logged in from Facebook

var email=true;
var facebook=false;
var google=false;

if(email || facebook || google) {
    console.log("login Success");
}