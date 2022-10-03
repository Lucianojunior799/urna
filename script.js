var numbers = document.getElementsByClassName("numbers");
let n1 = document.getElementById("emptyNumber1");
let n2 = document.getElementById("emptyNumber2");
let n3 = document.getElementById("emptyNumber3");
let n4 = document.getElementById("emptyNumber4");

let name = document.getElementById("emptyName");
let foto = document.getElementById("foto");
let partido = document.getElementById("partido");

let corrigir = document.getElementById("corrigir")

var votos = {Jair: 0, Lula: 0, Nulo: 0};

let tela = document.getElementById("screen")

let texto = document.getElementById("textoFinal")

let infos = document.getElementsByClassName("info")

let screen2 = document.getElementById("tela2")


function numeros(a) {


  if (n1.innerHTML == "") {
    n1.innerHTML = a;
  } else if (n1.innerHTML != ""  && n2.innerHTML == "") {
    n2.innerHTML = a;
  } else if (n1.innerHTML != ""  && n2.innerHTML != "" && n3.innerHTML == "") {
    n3.innerHTML = a;
  } else if (n1.innerHTML != ""  && n2.innerHTML != "" && n3.innerHTML != "" && n4.innerHTML == "") {
    n4.innerHTML = a;
  } 

  if (n1.innerHTML == 2 && n2.innerHTML == 2 ) {reconhecerCandidato(1)}

  else if (n1.innerHTML == 1 && n2.innerHTML == 3 ) {reconhecerCandidato(2)}

  

}

function reconhecerCandidato(n) {

switch(n) {

case 1: 

name.innerHTML = "Jair Bolsonaro"
foto.innerHTML = "<img src='bolsonaro.png' width = '250px' height ='220px'>" 
partido.innerHTML = "PL"

break;

case 2: 

name.innerHTML = "Lula"
foto.innerHTML = "<img src='lula.jpg' width = '200px' height ='200px'>" 
partido.innerHTML = "PT"

break;


case 5: 

name.innerHTML = "Nulo"
foto.innerHTML = "<img src='anonimo.jpg' width = '220px' height ='200px'>" 
partido.innerHTML = "Sem partido"


break;

}



}

function correção() {

n1.innerHTML = "";
n2.innerHTML = "";
n3.innerHTML = "";
n4.innerHTML = ""; 

name.innerHTML = ""
foto.innerHTML = "" 
partido.innerHTML = ""


}

function branco() {

n1.innerHTML = "0";
n2.innerHTML = "0";
n3.innerHTML = "0";
n4.innerHTML = "0";

reconhecerCandidato(5);



}
 
function votar() {


if (name.innerHTML == "Jair Bolsonaro") {

    votos.Jair++;

}

if (name.innerHTML == "Lula") {

    votos.Lula++;

}


if (name.innerHTML == "Nulo") {

    votos.Nulo++;

}

if (name.innerHTML != "Bolsonaro" && name.innerHTML != "Lula" 
&& name.innerHTML != "Nulo"  ) {

alert("Candidato Inválido")

} else {

screen2.style.opacity = "0";
texto.style.display = "block";

setTimeout(restart,3000); }


}

function result() {

  let total = "";
 
 if (votos.Jair>votos.Lula && votos.Jair>votos.Ciro && votos.Jair>votos.Daciolo && votos.Jair>votos.Nulo) {
   total = "Jair Bolsonaro"
 } else if (votos.Lula>votos.Jair && votos.Lula>votos.Ciro && votos.Lula>votos.Daciolo && votos.Lula>votos.Nulo) {
   total = "lula"
 }  
  else if (votos.Nulo>votos.Jair && votos.Nulo>votos.Ciro && votos.Nulo>votos.Daciolo && votos.Nulo>votos.Lula) {
   total = "Nulo, nenhum candidato foi escolhido"
 }
 
 
 
 
 alert("                                      Contagem de votos \n\r" + 
 "Jair Bolsonaro: " + votos.Jair + "\r\n" + "Lula: " + votos.Lula + "\r\n" + "Votos nulos: " + votos.Nulo);
 
 }
 
function restart() {

correção();

texto.style.display = "none";

screen2.style.opacity = "1";




}
