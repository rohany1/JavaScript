//Difference between equal and stict equal

var value="2";

if(value==2){
    console.log("Equal passes");
}
if(value===2){
    console.log("strict equal passes")
}else{
    console.log("Strict equal not passes")
}