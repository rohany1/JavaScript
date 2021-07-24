// function isEven(element){
//     // if(element%2===0){
//     //     return true;
//     // }
//     // return false;
//     return element%2===0;
// }
var isEven=(element)=>{
    return element%2===0;
}
// console.log(isEven(4));
// console.log(isEven(5));

var result=[2,4,6,8].every(isEven);
console.log(result);

//Shortcut methods 
var result1=[2,4,6,8].every((e)=>{
    return e%2===0;
})
console.log(result1);

//Shortcut method 2 when u dont use return keywords
var result2=[2,4,6,8].every((e)=>(e%2===0));
console.log(result2);

