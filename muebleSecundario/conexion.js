var right = document.querySelector("#right");
var left = document.querySelector("#left");
var objeto = document.querySelector(".objeto");
c = 0;
deg = 0;
left.addEventListener("click", function(e) {
    if (e) {
        c++;
        //console.log(c);
        deg = 90 * c;
        objeto.style.transform = `rotateY(${deg}deg) rotateX(10deg)`;
    }
    console.log("click");
})

right.addEventListener("click", function(e){
     if (e) {
        c--;
        //console.log(c);
        deg = 90 * c;
        objeto.style.transform = `rotateY(${deg}deg) rotateX(-10deg)`;
     }
});

var alto = document.querySelector("#alto");
var lateral = document.querySelectorAll(".lateral");
var base = document.querySelector(".base");
var objeto = document.querySelector(".objeto");
var span_altura = document.querySelector(".span_altura");
var medidaAltura = document.querySelector(".medidaAltura");
var caraDelantera = document.querySelector(".caraDelantera");

alto.addEventListener("click", function(e) {
    console.log(alto.value);
    var alturaMueble = parseInt(alto.value)*10;
    console.log(alturaMueble);

        medida = alturaMueble;
        centimetros = ((medida/50)*20);
        metros = centimetros/100;

//funcion para mostrar los metros en console y pantalla
        span_altura.innerHTML = `${centimetros}`;
        if (centimetros >= 100) {
            console.log(metros + " Metros");
            span_altura.innerHTML = `${metros}`;
        }
        
        //medida para poner en posicion a la base
        var medida_base = (medida/2)-100;
        base.style.transform = `rotateX(-90deg) translateZ(${medida_base}px)`;

        //parametro para convertir la medida a pixeles variable scale
        Scale = `${medida/2}px`;
        //insertando la altura definida en controles de medida a el objeto
        objeto.style.height = Scale;
        
        //funcion para escalar todas las caras a la misma distancia
        lateral.forEach(x => {
            x.style.height = Scale;
        });

        
//Funcion para no dejar que el valor de el cajon no sea 0
        if(alto.value == "0"){
            console.log("Error");
            alto.value = 5;
            medida = alto.value * 10;
            lateral.forEach(x => {
                x.style.height = `${medida}px`;
            });

            base.style.transform = `rotateX(-90deg) translateZ(${medida-100}px)`;
            
            //console.log(caraDelantera.style.height);
            caraDelantera.style.height = "50px";
        } 
        
        medidaAltura.style.height = `${medida/2}px`;
        
        console.log(caraDelantera.style.height); 
        var cara_delantera_pixeles = parseFloat(caraDelantera.style.height);
        console.log(cara_delantera_pixeles + " Pixeles cara delantera");

        cara_delantera_pixeles 
    });




