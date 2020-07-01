var mostrando = false;
var h1Titulo = null;
var textoH1Titulo = null;
var imagenPoster = null;

function filtro(){
 if(!mostrando){
    realizarPeticion();
    }else{
    reiniciarPantalla();
    realizarPeticion();
    }
}
function realizarPeticion(){
    http_request = new XMLHttpRequest();
    http_request.overrideMimeType('text/xml');
    http_request.onreadystatechange = function(){
        if (http_request.readyState==4) {
            if (http_request.status==200){
                procesarJSON(http_request.responseText);
            } else {
                //Muestro un error
            }
        }
        console.log("STATE:" + http_request.readyState);
        console.log("STATUS:" + http_request.status);
    };
    var tituloPelicula = $('#movieTitle').val();
    http_request.open('GET', 'http://www.omdbapi.com/?apikey=e34b5d05&t=' + tituloPelicula, true);
    http_request.send();
}

function procesarJSON(respuesta){
    var obj = JSON.parse(respuesta);
    console.log(obj);

    /*
    //Versión cutre sin JQuery
    document.getElementById("pelicula").innerHTML = "<H1>" + obj.Title + "</H1>";
    document.getElementById("pelicula").innerHTML += "<img src='" + obj.Poster + "'>";
    */
    /*
    //Versión cutre
    $("#pelicula").html("<H1>" + obj.Title + "</H1>");
    $("#pelicula").html($("#pelicula").html() + "<img src='" + obj.Poster + "'>")
    */
    if(typeof obj == undefined){
        textoH1Titulo = document.createTextNode("Error");
    }else{
        h1Titulo = document.createElement("h1");
        textoH1Titulo = document.createTextNode(obj.Title);
        h1Titulo.appendChild(textoH1Titulo);
        h1Titulo.setAttribute("class","titulo");
        document.querySelector("#pelicula").appendChild(h1Titulo);

        imagenPoster = document.createElement("img");
        imagenPoster.setAttribute("src",obj.Poster);
        document.querySelector("#pelicula").appendChild(imagenPoster);
        mostrando = true;
    }
}

function reiniciarPantalla(){
     document.querySelector("#pelicula").removeChild(h1Titulo);
     document.querySelector("#pelicula").removeChild(imagenPoster);
}