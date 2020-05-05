"use strict";

// Envoie les informations contenues dans le formulaire dans la base de données
function inscrireScout() {
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let dateNaissanceSplit = document.getElementById("dateNaissance").value.split("/");
    let dateNaissance = dateNaissanceSplit[2] + "-" + dateNaissanceSplit[1] + "-" + dateNaissanceSplit[0];
    let telephone = document.getElementById("telephone").value;
    let mail = document.getElementById("mail").value;
    let totem = document.getElementById("totem").value;
    let role = document.getElementById("role").value;
    let patrouille = document.getElementById("patrouille").value;
    let url = "inscrire?nom=" + nom + "&prenom=" + prenom + "&dateNaissance=" + dateNaissance + "&telephone=" + telephone + "&mail=" + mail + "&totem=" + totem + "&role=" + role + "&patrouille=" + patrouille;
    console.log(url);
    let xhr = new XMLHttpRequest();
    xhr.open("get", url);
    xhr.send();
}