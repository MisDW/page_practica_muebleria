const contenedor_columnas = document.getElementById("contenedor_test");
Sortable.create(contenedor_test, {
     animation: 150,
     chosenClass: "seleccionado",
     dragClass: "drag"
});

const caja_muestreo = document.querySelectorAll(".caja_muestreo");
caja_muestreo.forEach(div => {
        Sortable.create(div, {
            animation:100,
            chosenClass: "seleccionado",
            dragClass: "drag"
        })
});


var row1 = document.getElementById("row1");
row1.style.gridRow = 'span 4';
row1.style.gridColumn = 'span 2'; 
    // Sortable.create(caja, {
    // animation:100,
    // chosenClass: "seleccionado",
    // dragClass: "drag"
    // })

// contenedor.addEventListener("click", ()=>{
//     console.log("click");
// })


// document.addEventListener("click", (e)=>{
//     const selectC = new selection;
//     // console.log(e)
//     var element = e.target;
//     var colum = element.parentElement;
//     classColumn = colum.classList[0];

//     if(classColumn == "caja"){
//         selectC.selectColumn(colum)
//     }else{
//         console.warn("Se pulso otro objeto")
//     };
// })



// var columnsSelected = [];
// var cantidad = 0;
// const btn_añadir = document.getElementById("btn_añadir");

// btn_añadir.addEventListener("click", (e) => {
//     const selectA = new selection;
//     selectA.addColumn(columnsSelected);
// });

// class selection{

//     selectColumn(colum){
//         console.log(colum.id);
//         columnsSelected.push(colum);
//     }

//     addColumn(element){
//         element = element[element.length-1];
//         cantidad++;
//         element.innerHTML += `
//         <div class="elemento row" data-id="${cantidad}" id="row1">
//             <span>+ ${cantidad}</span>
//         </div>
//         `;
//     }
// }



