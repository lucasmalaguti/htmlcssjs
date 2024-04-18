function soma() {

    let a = parseInt(document.getElementById("valor1").value);
    let b = parseInt(document.getElementById("valor2").value);


    document.getElementById("result").value = a + b;
}



function color() {
    let ex3 = document.getElementById("ex3");


    if (ex3.style.backgroundColor == "white") {
        ex3.style.backgroundColor = "black";
        ex3.style.color = "white";
    } else {
        ex3.style.backgroundColor = "white";
        ex3.style.color = "black";
    }
}

function Name() {
    let todasDivs = document.getElementsByTagName("div"); // pega todos os divs do documento
    for (var i = 0; i < todasDivs.length; i++) {
        if (todasDivs[i].getAttribute("name") === "ex4") { // verifica se o name == ex4
            let tamanhoFonte = parseInt(todasDivs[i].style.fontSize);
            tamanhoFonte ++;
            todasDivs[i].style.fontSize = tamanhoFonte + "px"; // Altera a cor do parágrafo
        }
    }
}


function Class() {
    let elementos = document.getElementsByClassName("ex5"); // Obtém todos os elementos com a classe "destacado"
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.color = "red"; // Altera a cor dos elementos
        elementos[i].style.fontWeight = "normal"; // Remove o negrito dos elementos
    }
}