
let text=document.querySelector("input");
let imgbox=document.getElementById("imgbox");
let qrimg=document.getElementById("qrimg");



function qr(){
    if(text.value.length > 0){
     qrimg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +text.value; 
   imgbox.classList.add("show");
    }else{
        text.classList.add("error");
        setTimeout(() => {
            text.classList.remove("error");
        }, 1000);
    }
}
 