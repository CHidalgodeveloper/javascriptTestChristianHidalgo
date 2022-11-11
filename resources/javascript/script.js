console.log("BIENVENIDO A LA EVALUACIÓN DE JAVASCRIPT!!!");
function printText(){
let text=document.getElementById("input1").value;
document.getElementById("input1").innerHTML = text;
if(text==""){
    alert('"Ups! Nada que mostrar"');
}else{
    alert(text);

}
document.getElementById("input1").value = "";

};
function updateHeader(){
    let cabecera=document.getElementById("cabecera1");
    cabecera.setAttribute("class","none");
    cabecera.innerHTML="CABECERA ACTUALIZADA";
};
function mainFunction(){
    printText();
    updateHeader();

};