function login(msg,error){
    if(error){
        console.log("error is:"+error)
    }
    else{
        console.log("welcome:"+msg);
    }
}
function loginverification(username,password,clbk){
    if(username=="axyt28" && password=="654321"){
        clbk("success",null);
    }
    else{
        clbk(null,"username or password is incorrect")
    }
}
loginverification("axyt28","6554321",login)
//loginverification("axyt28","6_54321",login) OUTPUT: error is:username or password is incorrect
//loginverification("axyt28","654321",login)  OUTPUT: welcome:success