'use strict'
function cargarPok(){
    const lista = document.querySelector("bottoms");
    const URL = 'https://pokeapi.co/api/v2/pokemon?limit=25&offset=0';
    $.ajax({
        url: URL,
        type: "GET",
        success: function(result){
            console.log(result.results);
            result.results.forEach((element,index)=> {
                var nombre = element.name;
                $(".bottoms").append("<button>"+element.name+"</button>");
            });
        },
        error: function(error){
            console.log(error);
        }
    })
}
cargarPok();
$(".bottoms").click(function(e){
    var nombre = e.target;
    
    if(nombre.nodeName == "BUTTON"){
        $(".back").addClass("display");
    }
})
function buscarPok(){
    $(".bottoms").click(function(e){

        var nombre = e.target;
        console.log(nombre.nodeName);
        const URLs = 'https://pokeapi.co/api/v2/pokemon/'+nombre.textContent ;
        $.ajax({
            url: URLs,
            type: "GET",
            success: function(result){
                var tipo = result.types[0].type.name;
                var color = document.querySelector(".front");
                var fondo = document.querySelector(".img");
                switch (tipo) {
                    case "fire":
                        color.style.backgroundColor = "red";
                        fondo.style.background = "url('./volcan.png')";
                        break;
                    case "water":
                        color.style.backgroundColor = "blue";
                        fondo.style.background = "url('./mar.png')";
                        break;
                    case "grass":
                        color.style.backgroundColor = "green";
                        fondo.style.background = "url('./selva.jpg')";
                        break;
                    case "bug":
                        color.style.backgroundColor = "green";
                        fondo.style.background = "url('./pasto.jpg')";
                        break;
                    case "normal":
                        color.style.backgroundColor = "grey";
                        fondo.style.background = "url('./pasto.jpg')";
                        break;
                    case "electric":
                        color.style.backgroundColor = "yellow";
                        fondo.style.background = "url('./centralElectrica.png')";
                        break;
                    case "poison":
                        color.style.backgroundColor = "purple";
                        fondo.style.background = "url('./pasto.jpg')";
                        break;
                    default:
                        color.style.backgroundColor = "grey";
                        break;
                }
                $("#image").attr("src", result.sprites.other['official-artwork'].front_default);
                document.querySelector("#nombre").innerHTML = result.name;
                document.querySelector("#tipo").innerHTML = result.types[0].type.name;
                document.querySelector(".move1").innerHTML = result.moves[0].move.name;
                document.querySelector(".move2").innerHTML = result.moves[4].move.name;

                
            },
            error: function(error){
                console.log(error);
            }
        })
    })
}
buscarPok();

VanillaTilt.init(document.querySelector(".front"),{
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 1,
    
});