function sumW(a,b){
    return a+b;
}
function sumwithMsg(clbk,msg){
    const result=clbk(20,40);
    console.log(msg+":"+result)
}
sumwithMsg(sumW,"We are calculating in java")