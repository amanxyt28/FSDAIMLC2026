console.log("hello java script");
//let is a block-scope variable
//var is a loop-scope variable
console.log("Hello Using JS");
let a=78;
if(a>30){
    let a=100;
    console.log("a inside the block="+a);
}
console.log("a outside the block="+a);

const sum=function(a,b){
return a+b;
}
const data= sum(20,25);
console.log("Result="+data);

//ARROW FUNCTION
const msg=(mymsg)=>{
    console.log("Hello\n"+mymsg);
}
msg("welcome to FSD");


const mysqrt=(val)=>{
    return Math.sqrt(val);
}
const result=mysqrt(25);
    console.log("Result is="+result);


// IIFE
(()=>{console.log("Hiiii........IIFE")})();