const scale = document.getElementById("scale");
scale.addEventListener("click" ,() =>{
    console.log((scale.value)*0.01);
    const objeto = document.querySelector(".objeto")
    objeto.style.scale = `${(scale.value)*0.01}`;
})

const btnLeft = document.getElementById(".btnLeft");
const btnRight = document.getElementById(".btnRight");
const btnTop = document.getElementById(".btnTop");
const btnBottom = document.getElementById(".btnBottom");

var root = document.documentElement;
var getValueY = parseInt(getComputedStyle(root).getPropertyValue('--y'));
var getValueX = parseInt(getComputedStyle(root).getPropertyValue('--x'));
var setValues = (position,value) => {document.documentElement.style.setProperty(position, value);};
var speed = 45;

const btn = document.querySelectorAll(".btn").forEach(b => {
    
    b.addEventListener("click", (e) =>{
        console.log(getValueX);
        console.log(getValueY);
        switch (b.id) {
            case "btnTop":
                getValueY = getValueY+speed;
                setValues('--y', `${getValueY}deg`);
                break;
            case "btnBottom":
                getValueY = getValueY-speed;
                setValues('--y', `${getValueY}deg`);
                break;
            case "btnRight":
                getValueX = getValueX+speed;
                setValues('--x', `${getValueX}deg`);
                break;
            case "btnLeft":
                getValueX = getValueX-speed;
                setValues('--x', `${getValueX}deg`);
                break;
            default:
                console.log("Error");
                break;
        }
    })
});


const save = document.getElementById("save").onclick = () =>{
    const widthInput = parseFloat(document.getElementById("widthInput").value);
    const heightInput = parseFloat(document.getElementById("heightInput").value);
    const volumeInput = parseFloat(document.getElementById("volumeInput").value);

    // var widthDrawer = parseInt(getComputedStyle(root).getPropertyValue('--SizeDrawerWidth'));
    setValues('--SizeDrawerWidth', `${widthInput * 3}px`);
    setValues('--SizeDrawerHeight', `${heightInput * 3}px`);
    setValues('--SizeVolume', `${volumeInput * 3}px`);
};


const btnTool = document.querySelectorAll(".btnTool");
var clickClose = 0;

btnTool.forEach(tool => {
    tool.addEventListener("click", ()=>{
        clickClose++;
        console.log(clickClose);
        if (clickClose == 1) {
            const controls = document.querySelector(".controls");
            controls.style.right = "0px";
            controls.style.transition = "0.5s ease";
        }else if(clickClose == 2){
            const controls = document.querySelector(".controls");
            controls.style.right = "-150%";
            controls.style.transition = "0.5s ease";
            clickClose = 0;
        }
    });
});

var clickShow = 0;
const rotateDrawer = document.querySelector(".rotateDrawer");
const show = document.querySelector(".show").addEventListener("click", ()=>{
    clickShow++;
    if(clickShow == 1){
        rotateDrawer.style.transition = "0.5s ease";
        rotateDrawer.style.scale = "0";
        setTimeout(() => {
            rotateDrawer.style.display = "none";
        }, 200);
    }
    else if(clickShow == 2){
        clickShow = 0;
        rotateDrawer.style.transition = "0.2s ease";
        rotateDrawer.style.display = "flex";
        setTimeout(() => {
            rotateDrawer.style.scale = "1";
        }, 200);
    }
})



