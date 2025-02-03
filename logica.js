document.addEventListener("DOMContentLoaded", function () {
    // Obtener referencias a los elementos del DOM
    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");
    const celebration = document.getElementById("celebration");
    let yesBtnSize = 1.5; // Tamaño inicial del botón "Sí"

    // Evento para el botón "No"
    noBtn.addEventListener("click", function () {
        // Aumentar el tamaño del botón "Sí"
        yesBtnSize += 0.3;
        yesBtn.style.transform = `scale(${yesBtnSize})`;
        yesBtn.style.marginBottom = "10px";

        // Mover el botón "Sí" hacia arriba si es demasiado grande
        if (yesBtnSize > 2.5) {
            yesBtn.style.position = "relative";
            yesBtn.style.top = `-${(yesBtnSize - 2.5) * 20}px`;
        }
    });

    // Evento para el botón "Sí"
    yesBtn.addEventListener("click", function () {
        // Mostrar el contenedor de celebración
        celebration.classList.remove("d-none"); // Eliminar la clase que oculta el contenedor
        celebration.classList.add("active"); // Agregar la clase para mostrar la celebración

        // Función para crear globos animados
        function createBalloon() {
            let balloon = document.createElement("div");
            balloon.classList.add("balloon"); // Agregar la clase "balloon" para aplicar estilos
            balloon.style.left = `${Math.random() * 90 + 5}%`; // Posición horizontal aleatoria
            celebration.appendChild(balloon); // Agregar el globo al contenedor de celebración

            // Eliminar el globo después de que termine la animación
            setTimeout(() => {
                balloon.remove();
            }, 5000); // Coincide con la duración de la animación (5 segundos)
        }

        // Crear globos continuamente cada 500 ms
        const balloonInterval = setInterval(createBalloon, 500);

        // Detener la creación de globos después de 10 segundos (opcional)
        setTimeout(() => {
            clearInterval(balloonInterval);
        }, 10000); // Detiene la creación de globos después de 10 segundos
    });
});