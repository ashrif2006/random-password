let btn=document.querySelector(".btn");
let input=document.getElementById("input");
let copy=document.getElementById("copy");
const alertMas=document.querySelector(".alert");

copy.addEventListener("click",()=>{
    copyPass();
    if(input.value){
        alertMas.classList.remove("active");
        setTimeout(()=>{
            alertMas.classList.add("active")
        },1000);  
    }

})




btn.addEventListener("click",()=>{
    input.value=createPass();
})


function createPass(){
    const char="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+"
    const passLen= 14;
    let pass="";

    for(let i = 0 ; i < passLen; i++){
        const randomNum=Math.floor(Math.random()*char.length);
        pass+=char[randomNum];

    }
    alertMas.innerHTML = pass + " Copied!" ;
    return pass;
}




function copyPass(){
    input.select();
    input.setSelectionRange(0,9999);//for Phone
    navigator.clipboard.writeText(input.value);
}