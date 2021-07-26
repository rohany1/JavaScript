// for all regular function calls, this points to window object
console.log(this);

var user={
    firstName:"Rohan",
    courseCount:7,
    getCourseCount:function() {
        console.log("Line 8",this);//this keyword here call the object
        function sayHello(){
            console.log("Line 10",this);//but this keyword here is regular function calls so this points to window object
        }
        sayHello();
    }
}   

user.getCourseCount();

//this will give you object only when its object call