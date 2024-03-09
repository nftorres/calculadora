const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach((boton) => {
    boton.addEventListener("click", () => {
        let estado = {
            textoPantalla: pantalla.textContent,
            botonApretado: boton.textContent,
        };

        switch (boton.dataset.type) {
            case "control":
                manejarBotonesControl(boton, estado);
                break;
            case "operador":
                manejarBotonesOperador(boton, estado);
                break;
            case "numero":
                manejarBotonesNumero(estado);
                break;
        }
    });
});

function manejarBotonesControl(boton, estado) {
    if (boton.id === "c") {
        pantalla.textContent = "0";
    }

    if (boton.id === "borrar" && estado.textoPantalla.length > 1) {
        pantalla.textContent = estado.textoPantalla.slice(0, -1);
    } else {
        pantalla.textContent = "0";
    }
}

function manejarBotonesOperador(boton, estado) {
    let ultimoCaracter = estado.textoPantalla.slice(-1);

    if (ultimoCaracter !== estado.botonApretado) {
        pantalla.textContent += estado.botonApretado;
    }

    let operadores = ["/", "*", "-", "+"];

    if (operadores.includes(ultimoCaracter)) {
        pantalla.textContent = estado.textoPantalla.replace(
            ultimoCaracter,
            estado.botonApretado
        );
    }

    if (boton.id === "igual") {
        let resultado = eval(estado.textoPantalla);
        pantalla.textContent = resultado;
    }
}

function manejarBotonesNumero(estado) {
    if (pantalla.textContent === "0") {
        pantalla.textContent = estado.botonApretado;
    } else {
        pantalla.textContent += estado.botonApretado;
    }
}
