//Show user a signout button if he is authenticated
//Other wise show him option to login/signup

var authenticated=true;

// if(authenticated){
//     console.log("Show signout button");
// }else{
//     console.log("Show login option");
// }

//Other way
authenticated ? console.log(" signout button"): console.log(" login option");