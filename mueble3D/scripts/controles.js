
const scale = document.getElementById("scale");
const objeto = document.querySelector(".objeto");
// var getScale = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--scale'));

scale.addEventListener("click" ,(e) =>{
        console.log(scale.value * 0.005);
        console.log("presiono");
        setValues('--scale', `${scale.value * 0.005}`); 
})

var root = document.documentElement;
var getValueY = parseInt(getComputedStyle(root).getPropertyValue('--y'));
var getValueX = parseInt(getComputedStyle(root).getPropertyValue('--x'));
var setValues = (position,value) => {document.documentElement.style.setProperty(position, value);};
var speed = 55;

const btn = document.querySelectorAll(".btn").forEach(b => {
    b.addEventListener("click", (e) =>{
        b = e.target.id;
        console.log(b);
        switch (b) {
            case "btnReset":
                // getValueY = getValueY+speed;
                // setValues('--y', `${getValueY}deg`);
                setValues('--x', `10deg`);
                setValues('--scale', `0.5`); 

                // objeto.style.scale = 1;
                // setValues('--y', `-10deg`);
                break;
            case "btnRight":
                // getValueX += speed;
                setValues('--x', `${(getValueX - 35) - speed}deg`);
                console.log(getValueX);

                break;
            case "btnLeft":
                // getValueX -= speed;
                setValues('--x', `${getValueX + speed}deg`); 
                console.log(getValueX);
                break;
            default:
                console.log("Error");
                break;
        }
    })
});

const caraDelantera = document.querySelector(".caraDelantera");
caraDelantera.addEventListener("click", ()=>{
    console.log("click");
    const contenedor = document.querySelector(".contenedor");
    const contenedor_muestreo_cajas = document.querySelector(".contenedor_muestreo_cajas");
    setValues('--scale', `${0}`); 
    contenedor_muestreo_cajas.style.scale = "1";
})

const icono_cerrar_test = document.querySelector(".icono_cerrar_test");
icono_cerrar_test.addEventListener("click", ()=>{
    
    const contenedor = document.querySelector(".contenedor");
    const contenedor_muestreo_cajas = document.querySelector(".contenedor_muestreo_cajas");
    setValues('--scale', `${0.5}`); 
    contenedor_muestreo_cajas.style.scale = "0";
})


const save = document.getElementById("save").onclick = () =>{
    const widthInput = parseFloat(document.getElementById("widthInput").value);
    const heightInput = parseFloat(document.getElementById("heightInput").value);
    const volumeInput = parseFloat(document.getElementById("volumeInput").value);

    // var widthDrawer = parseInt(getComputedStyle(root).getPropertyValue('--SizeDrawerWidth'));
  
    console.log(widthInput);
    console.log(heightInput);
    console.log(volumeInput);
    setValues('--SizeDrawerWidth', `${widthInput * 200}px`);
    setValues('--SizeDrawerHeight', `${heightInput * 200}px`);
    setValues('--SizeVolume', `${volumeInput * 200}px`);
};

const pedir = document.getElementById("pedir").onclick = () =>{
    alert("Tu pedido sera procesado...");
        Push.create("Usuario...!", 
        {
        body: "Un usuario a mandado un pedido",
        data: `Quisiera saber mas info...`,
        icon: '',
        timeout: 5000,
        onClick: function () {
            // window.focus() ;
            window.open("menu");
            this.close(); 
        },
        vibrate: 200
        }
    );
    location.href=`https://wa.me/+528110642030?text=Buenos dias Mi mueble tiene las medidas de, Ancho ${widthInput}m , Largo ${heightInput}m, Volumen ${volumeInput}m`;    
}

const texture = document.querySelectorAll(".texture");
texture.forEach(element => {
    element.addEventListener("click", () => {
        console.log("Direccion: " + element.id);
        setValues('--imgTexture', "url( " + `${element.src}` + ")");  
    })
});

const texturas_img = document.querySelector(".texturas_img").addEventListener("click", (e)=>{
    const target = e.target
    
    console.log(target.src );
    setValues('--imgTexture', `url("${target.src}")`);
})


// const btnTool = document.querySelectorAll(".btnTool");
// var clickClose = 0;

// btnTool.forEach(tool => {
//     tool.addEventListener("click", ()=>{
//         clickClose++;
//         console.log(clickClose);
//         if (clickClose == 1) {
//             const controls = document.querySelector(".controls");
//             controls.style.right = "0px";
//             controls.style.transition = "0.5s ease";
//         }else if(clickClose == 2){
//             const controls = document.querySelector(".controls");
//             controls.style.right = "-150%";
//             controls.style.transition = "0.5s ease";
//             clickClose = 0;
//         }
//     });
// });

// var clickShow = 0;
// const rotateDrawer = document.querySelector(".rotateDrawer");
// const show = document.querySelector(".show").addEventListener("click", ()=>{
//     clickShow++;
//     if(clickShow == 1){
//         rotateDrawer.style.transition = "0.5s ease";
//         rotateDrawer.style.scale = "0";
//         setTimeout(() => {
//             rotateDrawer.style.display = "none";
//         }, 200);
//     }
//     else if(clickShow == 2){
//         clickShow = 0;
//         rotateDrawer.style.transition = "0.2s ease";
//         rotateDrawer.style.display = "flex";
//         setTimeout(() => {
//             rotateDrawer.style.scale = "1";
//         }, 200);
//     }
// })
