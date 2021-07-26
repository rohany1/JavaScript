const names=["Facebook","Apple","Amazon","Netflix","Google"];
//for of loop is basically used in case of array
for(const n of names){
    console.log(n);
}

const symbols={
    fb:"facebook",
    yt:"Youtube",
    ig:"Instagram",
    rr:"Rolls Royce"
}
//for in loop is basically used in case of objects
for(const n in symbols){
    console.log(n,":",symbols[n]);
}