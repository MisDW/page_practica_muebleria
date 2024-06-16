const ancho_info = document.getElementById("ancho_info");
const largo_info = document.getElementById("largo_info");
const btn_guardar = document.getElementById("btn_guardar");
 const cara = document.querySelector(".cara");
 const cajon = document.querySelector(".cajon");

const btn_add = document.getElementById("btn_add");

const object = document.getElementById("object");
const numColumnas = document.getElementById("columnas");
const numFilas = document.getElementById("filas");

var n_caja = 2;

class cajonLogic{

inputValues(target, className, div){
 var input_largo_valor =  target.clientHeight;
 var input_ancho_valor =  target.clientWidth;

ancho_info.value = input_ancho_valor;
largo_info.value = input_largo_valor;

 object.innerHTML = `Objeto: <b> ${target.id}</b>`;
}

saveValues(div){
 console.log(div);
 console.log("Valores guardados!");
 let endDiv = div.pop();
 
 endDiv.style.width = `${ancho_info.value}px`;
 endDiv.style.height = `${largo_info.value}px`;
 
}

addDrawer(cara){
 n_caja++;
 cara.innerHTML += `<div class="cajon" id="caja${n_caja}"> ${n_caja} </div>`
}

acomodo(cara){
 console.log(cara);
 // cara.style.gridTemplateAreas = "a,b"; 
}
}

const cajonObj = new cajonLogic();
var div_name =[];

cara.addEventListener("click", (e)=>{
 var target = e.target;
 let className = target.className;
 // console.log(e);
 // console.log(div_name);
 div_name.push(target);
 cajonObj.inputValues(target,className);
});

btn_guardar.onclick = () => {
 cajonObj.acomodo(cara);
 cajonObj.saveValues(div_name);
 console.log("Guardando valores");
};


btn_add.onclick = () => {
 cajonObj.addDrawer(cara);    
};
