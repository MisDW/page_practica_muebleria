class mueble{
    addDrawer(id, area, width, height){
        /* Example const cajon */ 
        this.id = id;           //id : "cajon1"
        this.area = area;       //area : "a"
        this.width = width;     //width : "100px"
        this.height = height;   //height : "50px"

        let drawer = {
            id : this.id,
            area : this.area,
            width : this.width,
            height : this.height
        }

        muebleArray.push(drawer);
        cara.innerHTML = "";
        muebleArray.forEach(cajon => {
            cara.innerHTML += `<div class="cajon" id="cajon${cajon.id}" area="${cajon.area}" style="width:${cajon.width};height:${cajon.height};grid-area:${cajon.area};">${cajon.area}</div>`
        });
    }

    inputValues(div,inputWidth,inputHeight){
        let width = div.clientWidth;
        let height = div.clientHeight;
        inputWidth.value = width;
        inputHeight.value = height;
    }

    combineArea(){  
        combineAreaArray[1].setAttribute("area", combineAreaArray[0].getAttribute("area"));
        combineAreaArray.forEach(div => {div.style.border = "0px";});
        combineAreaArray = [];
        this.templateArea();
    }

    borderCombine(div){
        console.log(combineAreaArray.length);
        if(combineAreaArray.length == 3){this.clearArray()}
            else{div.style.border = "3px solid #16e500";}
            
        if(combineAreaArray.length == 2){
            if (combineAreaArray[0] == combineAreaArray[1]) {
                this.clearArray();
            }else{
                area1Span.innerHTML = combineAreaArray[0].getAttribute("area");
                area2Span.innerHTML = combineAreaArray[1].getAttribute("area");
            }}          
    }

    clearArray(){
        combineAreaArray.forEach(element => {element.style.border = "0px"}) 
        combineAreaArray = []
        area1Span.innerHTML = "x";
        area2Span.innerHTML = "y";
    }
}

var muebleArray = [
    {id:1,area:"a",width:100,height:50},
    {id:2,area:"b",width:100,height:50}
];

var combineAreaArray = [];

const objMueble = new mueble();

const cara = document.querySelector(".cara");
const inputWidth = document.getElementById("ancho_info");
const inputHeight = document.getElementById("largo_info");
const objectName = document.getElementById("objectName");
const inputsColumnRows = document.querySelector(".inputsColumnRows");

const area1Span = document.getElementById("area1"); 
const area2Span = document.getElementById("area2"); 

document.addEventListener('DOMContentLoaded', function() {
    muebleArray.forEach(cajon => {
        cara.innerHTML += `<div class="cajon" id="caja${cajon.id}" area="${cajon.area}" style="width:${cajon.width};height:${cajon.height};grid-area:${cajon.area};">${cajon.area}</div>`
    });
});

cara.addEventListener("click", (e)=>{
    var target = e.target;
    let areaId = target.getAttribute("area");
        objMueble.inputValues(target,inputWidth,inputHeight);
        if(target.className == "cajon"){ 
            objectName.innerText = `Objeto: cajon(${areaId})`;
            inputsColumnRows.style.display = "none";

            combineAreaArray.push(target);
            objMueble.borderCombine(target);
        }
            else{
                objectName.innerText = `Objeto: (${areaId})`;
                inputsColumnRows.style.display = "grid";
            } 
});

var idDrawer = 2;
var letraActual = "b";

const btn_add = document.getElementById("btn_add").onclick = ()=>{
    idDrawer++; 
    
    letraActual = String.fromCharCode(letraActual.charCodeAt(0) + 1)   
    letraActual == "z" ? letraActual = "`" + window.alert("Limite!") : console.log(letraActual); 
    objMueble.addDrawer(idDrawer, letraActual, 100, 50);
};

const btn_combine = document.getElementById("btn_combine").onclick = () =>{
    let caras = document.querySelector(".cara");
    caras.style.gridTemplateAreas = 
    "a b"
    "c d"
    "c d";
    console.log("Click");
    // objMueble.combineArea();
};

const btn_guardar = document.getElementById("btn_guardar").onclick = () =>{
    cara.style.width = inputWidth.value;
    cara.style.height = inputHeight.value;
    console.log("Click");
};