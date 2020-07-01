var menuVisible = true;
$(document).ready(function(){
    inicializar();
})

function inicializar(){
    $("#insertar").click(function(){
        mostrarInsertar();
    });
    $("#consultar").click(function(){
        mostrarConsultar();
    });
    $("#menu").click(function(){
        moverMenu();
    })
}
function mostrarConsultar() {
    $("#divInsert").css("left", "-100%");
    $("#divQuery").css("left", "0px");
}

function mostrarInsertar() {
    $("#divInsert").css("left", "0px");
    $("#divQuery").css("left", "-100%");
}

function moverMenu(){
    if(menuVisible){
        $("#menu").css("left", "-40%");
        menuVisible=false;
    }else{
        $("#menu").css("left", "0px");
        menuVisible=true;
    }
}