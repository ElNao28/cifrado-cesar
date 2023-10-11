let inputElement = document.querySelector("#msj");
let resultado = document.querySelector("#res");
let dez = document.querySelector("#dez");
let abc = ["a", "b", "c", "d", "e", "f", "g", "h","i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s","t", "u","v", "w", "x", "y", "z"];

const cifrado = () => {
    let msj = inputElement.value;
    let datos = [];
    let dezP =  dez.value;

    msj.toLowerCase().split("").forEach(element => {
        if (element === "ñ") {
            element = "n";
        }
        if (element === " ") {
            datos.push(" ");
        } else {
            for (let i = 0; i < abc.length; i++) {
                if (element === abc[i]) {
                    datos.push(abc[(i - Number(dezP) + 26) % 26]);
                }
            }
        }
    });

    let res = datos.join("");
    resultado.value = res;
};

const DesCifrado = () => {
    let msj = inputElement.value;
    let datos = [];
    let dezP =  dez.value;
    
    msj.toLowerCase().split("").forEach(element => {
        if (element === " ") {
            datos.push(" ");
        } else {
            for (let i = 0; i < abc.length; i++) {
                if (element === abc[i]) {
                    datos.push(abc[(i + Number(dezP))%26]);
                }
            }
        }
    });

    let res = datos.join("");
    resultado.value = res;
};

document.querySelector("#cifrado").addEventListener("click", cifrado);
document.querySelector("#descifrado").addEventListener("click", DesCifrado);
