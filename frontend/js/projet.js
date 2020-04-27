"use strict";

window.addEventListener("load", initialiserPage);


function initialiserPage () {
    let xhr = new XMLHttpRequest();
    xhr.open("get", "scouts");
    xhr.onload = callbackAffichageScouts;
    xhr.send();

}

function callbackAffichageScouts() {
    console.log(this.responseText);
    let reponse = JSON.parse(this.responseText);
    let index = Object.keys(reponse);
    console.log(index);


}




function confirmer () {
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let ddn = document.getElementById("ddn").value;
    let tel = document.getElementById("tel").value;
    let mail = document.getElementById("mail").value;
    let totem = document.getElementById("totem").value;
    let role = document.getElementById("role").value;
    let patrouille = document.getElementById("patrouille").value;
    alert(nom);
}
