
























/*MISC */



function paragraf() {
    const novopara = document.createElement("div");
    novopara.classList.add('paragrafu');
    novopara.innerHTML = "Testando";
    document.body.appendChild(novopara);
  }

  function removeElementsByClass(){
    const elements = document.getElementsByClassName('paragrafu');
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

/*
function limpar() {
  const elem = document.getElementsByClassName('paragrafu');
  elem.parentNode.removeChild();
} */

const menuHam = document.querySelector(".menuHam");
const itemHams = document.querySelectorAll(".itemHam");
const abreFecha= document.querySelector(".abreFecha");
const fechaMenu= document.querySelector(".fechaMenu");
const abreMenu = document.querySelector(".abreMenu");

const testeT = document.querySelector(".fa-circle-left");
testeT.style.display = "none";

function togglemenuHam() {
  if (menuHam.classList.contains("showMenu")) {
    menuHam.classList.remove("showMenu");
    fechaMenu.style.display = "none";
    abreMenu.style.display = "block";
    abreFecha.style.position = "fixed";
    abreFecha.style.marginLeft  = "0px";
  } else {
    menuHam.classList.add("showMenu");
    fechaMenu.style.display = "block";
    abreMenu.style.display = "none";
    abreFecha.style.marginLeft  = "187px";
  }
}

abreFecha.addEventListener("click", togglemenuHam);

itemHams.forEach( 
  function(itemHam) { 
    itemHam.addEventListener("click", togglemenuHam);
  }
)

/*setInterval(togglemenuHam, 10000);*/

