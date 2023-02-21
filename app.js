//Menu Sandwich
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculto el menu una vez que selecciono una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Formulario
var inputs = document.getElementsByClassName('formulario-input');
for (var i= 0; i< inputs.length;i++) {
inputs[i].addEventListener('keyup',function(){
    if(this.value.lenght>=1) {
        this.nextElementSibling.classList.add('fijar');
    } else {
    this.nextElementSibling.classList.remove('fijar');
    }
});
}