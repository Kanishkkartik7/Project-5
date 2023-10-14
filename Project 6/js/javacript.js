let btndecrement=document.getElementById("Decrement")
let btnincrement=document.getElementById("Increment")
let btnreset=document.getElementById("Reset")
let btndisplayvalue=document.getElementById("Displayvalue")
btndecrement.addEventListener("click",decrement)
btnincrement.addEventListener("click",increment)
btnreset.addEventListener("dblclick",reset)
function decrement(){
    let value = Number(btndisplayvalue.innerText)
    if(value>0){
        btndisplayvalue.innerText=value-1;
    }
    else{
        alert("Negative Values are not allowed");
    }
}
function increment(){
    value =Number(btndisplayvalue.innerText);
    if(value>=10){
        alert("Value greater then 10 not allowed");
    }
    else{
        btndisplayvalue.innerText=value+1;
    }
}
function reset(){
    value=Number(btndisplayvalue.innerText);
    btndisplayvalue.innerText=0
}