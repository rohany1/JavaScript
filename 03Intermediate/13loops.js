// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

const myState=[
    "Rajasthan",
    "Punjab",
    "Gujarat",
    "Himachal Pradesh",
    1945,
    "Assam",
    "West Bengal"
];
//For loop
for(let i=0;i<myState.length;i++) {
    if(typeof myState[i]!=='string') {
        continue;
    }
    console.log(myState[i]);
}

//while loop
console.log("//////////////////////////////////////////////////////");
let i=0;
while(i<myState.length){
    console.log(myState[i]);
    i++;
}//continue not work in while loop

//do while loop
console.log("//////////////////////////////////////////////////////");
let j=20;
do{
    console.log(j);
    j++;
}while(j<10);