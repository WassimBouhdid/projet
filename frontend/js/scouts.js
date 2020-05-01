"use strict";

window.addEventListener("load", listerScouts);

function listerScouts() {
    let xhr = new XMLHttpRequest();
    xhr.open("get", "lister");
    xhr.onload = callbackAffichageScouts;
    xhr.send();
}

function callbackAffichageScouts() {
    let tableau = JSON.parse(this.responseText);
    if (tableau.length === 0) {
        document.querySelector("div.listing").innerHTML = "<table></table>";
    }
    let proprietes = Object.keys(tableau[0]);
    let table = "<table>";
    let titre = "<tr>";
    for (let e = 1; e < proprietes.length; e++) {
        titre += "<th>" + proprietes[e] + "</th>";
    }
    titre += "</tr>\n";
    table += titre;
    for (let e of tableau) {
        var tr = "<tr id=" + e[proprietes[0]] + " onclick='ficheScout(" + e[proprietes[0]] + ")'>";
        for (let f = 1; f < proprietes.length; f++) {
            tr += "<td>" + e[proprietes[f]] + "</td>";
        }
        tr += "</tr>";
        table += tr;
    }
    table += "</table>";
    document.querySelector("div.listing").innerHTML = table;
}

function afficherCarte(card) {
    document.getElementById("inscription").style.display = "none";
    document.getElementById("listing").style.display = "none";
    if (card === 'inscription') {
        document.getElementById("inscription").style.display = "table";
    } else if (card === 'listing') {
        document.getElementById("listing").style.display = "table";
    }
}

function getInfos() {
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let ddn = document.getElementById("ddn").value;
    let tel = document.getElementById("tel").value;
    let mail = document.getElementById("mail").value;
    let totem = document.getElementById("totem").value;
    let role = document.getElementById("role").value;
    let patrouille = document.getElementById("patrouille").value;
}

function ficheScout(id) {
    let xhr = new XMLHttpRequest();
    xhr.open("get", "fiche");
    xhr.onload = function () {
        creerFiche(JSON.parse(xhr.responseText), id)
    };
    xhr.send();
}

function creerFiche(tableau, id) {
    let proprietes = Object.keys(tableau[0]);
    let table = "<table>"
    for (let e of tableau) {
        if (e.Id === id) {
            for (let f = 1; f < proprietes.length; f++) {
                table += "<tr><td>" + proprietes[f] + "</td><td>" + e[proprietes[f]] + "</td></tr>";
            }
        }
    }
    table += "</table>";
    document.querySelector("div.fiche").innerHTML = table;
}