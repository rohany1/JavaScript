const uid="abc123";

var firstName="Rohan";
var lastName="yadav";
var country="India";
var state="Rajasthan";
var city="udaipur";
var email="rohanY@gmail.com";
var password="123456";
var confirmPassword="123456";
var courseCount=0;
var isLoggedInFromGoogle=false;

//fullName=prompt("Enter your name");

// console.log("Full name is: "+ fullName);
// console.log(email);
// console.log(uid);

//Good way
console.log(`
    User ID is: ${uid}
    User First Name is: ${firstName}
    User Last Name is: ${lastName}
    Lives in Country: ${country};
    and State: ${state}
    and City: ${city}
    uses the email as: ${email}
    and password is: ${password}
    User Course Count: ${courseCount}
    User logged from google: ${isLoggedInFromGoogle}
`);