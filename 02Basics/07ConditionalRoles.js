//Create an application with following rules:
//admin - gets full access
//subadmin - gets access to create /delete courses
//testprep- gets access to create /delete tests
//user - gets access to consume content

var user="testprep";

switch (user) {
    case "admin":
        console.log("You get the full access");
        break;
    case "subadmin":
        console.log("You get the access to create / delete course");
        break;
    case "testprep":
        console.log("You get the access to create /delete tests");
        break;
    case "user":
        console.log("You get the access to conume content");
    default:
        console.log("No access");
        break;
}