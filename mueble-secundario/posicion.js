const contenedor = document.getElementById("contenedor");
Sortable.create(contenedor, {
     animation: 150,
     chosenClass: "seleccionado",
     dragClass: "drag"
});

const caja = document.querySelectorAll(".caja");
caja.forEach(div => {
        Sortable.create(div, {
            animation:100,
            chosenClass: "seleccionado",
            dragClass: "drag"
        })
});


var box = document.getElementById("box")
box.style.gridRow = 'span 4';
 box.style.gridColumn = 'span 2'; 
    // Sortable.create(caja, {
    // animation:100,
    // chosenClass: "seleccionado",
    // dragClass: "drag"
    // })

// contenedor.addEventListener("click", ()=>{
//     console.log("click");
// })