const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach((boton) => {
    boton.addEventListener("click", () => {
        const textoPantalla = pantalla.textContent;
        const botonApretado = boton.textContent;

        switch (boton.className) {
            case "btn control":
                if (boton.id === "c") {
                    pantalla.textContent = "0";
                }

                if (boton.id === "borrar" && textoPantalla.length > 1) {
                    pantalla.textContent = textoPantalla.slice(0, -1);
                } else {
                    pantalla.textContent = "0";
                }
                break;
            case "btn operador":
                let ultimoCaracter = textoPantalla.slice(-1);

                if (ultimoCaracter !== botonApretado) {
                    pantalla.textContent += botonApretado;
                }

                let operadores = ["/", "*", "-", "+"];

                if (operadores.includes(ultimoCaracter)) {
                    pantalla.textContent = textoPantalla.replace(
                        ultimoCaracter,
                        botonApretado
                    );
                }

                if (boton.id === "igual") {
                    let resultado = eval(textoPantalla);
                    pantalla.textContent = resultado;
                }
                break;
            case "btn numero":
                if (pantalla.textContent === "0") {
                    pantalla.textContent = botonApretado;
                } else {
                    pantalla.textContent += botonApretado;
                }
                break;
        }
    });
});
