/*
Define a function that can answer the role of a user.
A user can be on following roles:
admin - with full access
subadmin - with access to create /delete courses
testprep- with access to create /delete tests
user - consume all content
other- trial users

Input: getUserRole(name,role);
*/
function getUserRole(name,role){
    switch (role) {
        case "admin":
            return `${name} is admin with full access`;
        case "subadmin":
            return `${name} is subadmin with access to create /delete courses`;
        case "testprep":
            return `${name} is testprep with access to create/delete tests`;
        case "user":
            return `${name} is user who can consume all content`;
        default:
            return `${name} has access for free trails`;
    }
}

console.log(getUserRole("Rohan","subadmin"));

//In library like React common practise is like this :

var getUserRole=function (name,role){
    switch (role) {
        case "admin":
            return `${name} is admin with full access`;
        case "subadmin":
            return `${name} is subadmin with access to create /delete courses`;
        case "testprep":
            return `${name} is testprep with access to create/delete tests`;
        case "user":
            return `${name} is user who can consume all content`;
        default:
            return `${name} has access for free trails`;
    }
}

console.log(getUserRole("Rohan","subadmin"));