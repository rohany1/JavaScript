var firstname ="Rohan";

console.log("Line number 3",firstname);
function sayName(){
    //var firstname="Mr. Rohan"
    console.log("Line number 6",firstname);
    sayNameTwo();

    function sayNameTwo() {
        //var firstname="Mr. RY";
        console.log("Line number 10",firstname);
    }
}

sayName();
