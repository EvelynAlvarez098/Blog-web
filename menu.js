$(document).ready(main);

var contador = 1; 

function main(){
    $('.menu_bar').click(function(){
        console.log("menu bar")
        if(contador==1){
            console.log("menu bar contador 0")
            $('nav').animate({
                left: '0'
            });
            contador = 0;
        }else{
            console.log("menu bar contador1")
            contador=1;
            $('nav').animate({
                left: '-150%'
            });
                 
        }
   });
};

document.querySelector("#show-login").addEventListener("click", function(){
    console.log("hola")
    document.querySelector(".popup").classList.add("active");
});

document.querySelector(".popup .close-btn").addEventListener("click", function(){
    document.querySelector(".popup").classList.remove("active");
});

function enviarRegistro(){
    document.getElementById("iname").value = "";
    document.getElementById("email").value = "";
    alert("Registro enviado");
}

