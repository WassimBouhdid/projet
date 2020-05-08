"use strict";

window.addEventListener("load", listerRoles);

window.addEventListener("load", listerPatrouilles);


function listerRoles() {   //Onload
    let xhr = new XMLHttpRequest();
    xhr.open("get", "roles");
    xhr.onload = callbackListerRoles;
    xhr.send();
}

function listerPatrouilles() {   //Onload
    let xhr = new XMLHttpRequest();
    xhr.open("get", "patrouilles");
    xhr.onload = callbackListerPatrouilles;
    xhr.send();
}

function callbackListerRoles() {
    let tableau = JSON.parse(this.responseText);
    let proprietes = Object.keys(tableau[0]);
    let select="<select class='select' id='role'><option disabled='disabled' selected='selected'>Rôle</option>";
    for(let e of tableau){
        let option = "<option value=" + e[proprietes[0]] + ">" + e[proprietes[1]] + "</option>";
        select += option;
    }
    select+="</select>";
    document.getElementById("selectRole").innerHTML = select;
}

function callbackListerPatrouilles() {
    let tableau = JSON.parse(this.responseText);
    console.log(tableau);
    let proprietes = Object.keys(tableau[0]);
    console.log(proprietes);
    let select="<select class='select' id='patrouille'><option disabled='disabled' selected='selected'>Patrouille</option>";
    for(let e of tableau){
        let option = "<option value=" + e[proprietes[0]] + ">" + e[proprietes[1]] + "</option>";
        select += option;
    }
    select+="</select>";
    document.getElementById("selectPatrouille").innerHTML = select;
}