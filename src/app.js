import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ['the', 'our'];
let adjetive = ['great', 'big'];
let noun = ['jogger', 'puedes'];
let extension = [".com", ".net", ".us", ".es"];
window.onload = function () {

  document.getElementById("generador").innerHTML = generadorDominios().join("<br>")

  function generadorDominios() {
    let dominios = [];
    for (let pro of pronoun) {
      for (let adj of adjetive) {
        for (let nom of noun) {
          for (let ext of extension) {
            if (nom === "puedes" && ext === ".es") {
           
              dominios.push(`${pro}${adj}pued${ext}`)

            } else {

              dominios.push(`${pro}${adj}${nom}${ext}`)
            }

          }
        }

      }
    }
    return dominios;

  }

};