//Menu desplegable
const menu = document.getElementById("mobileMenu");
const toggleButton = document.querySelector(".navbar-toggler");
const closeButton = document.querySelector(".close-menu");

if (toggleButton && menu) {
    toggleButton.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
}

if (closeButton && menu) {
    closeButton.addEventListener("click", function () {
        menu.classList.remove("active");
    });
}

//Cantidad de productos
const products = document.querySelectorAll(".product");

products.forEach(product => {
    const input = product.querySelector("input[type='number']");
    const btnPlus = product.querySelector("button:nth-child(1)");
    const btnMinus = product.querySelector("button:nth-child(3)");

    btnPlus.addEventListener("click", () => {
        input.value = parseInt(input.value || 0) + 1;
    });

    btnMinus.addEventListener("click", () => {
        let currentValue = parseInt(input.value || 0);
        if (currentValue > 1) input.value = currentValue - 1;
    });
});

//Métodos de Pago
document.addEventListener("DOMContentLoaded", function () {
    const metodosPago = document.querySelectorAll('input[name="pago"]');

    metodosPago.forEach((metodo) => {
        metodo.addEventListener("change", function () {
            // Ocultar todos los formularios y QR
            document.querySelectorAll(".formulario-pago, .qr-pago").forEach((el) => {
                el.classList.add("d-none");
            });

            // Mostrar el formulario o QR correspondiente
            if (this.value === "credito") {
                document.getElementById("formCredito").classList.remove("d-none");
            } else if (this.value === "debito") {
                document.getElementById("formDebito").classList.remove("d-none");
            } else if (this.value === "yape") {
                document.getElementById("qrYape").classList.remove("d-none");
            } else if (this.value === "plin") {
                document.getElementById("qrPlin").classList.remove("d-none");
            }
        });
    });
});

//Dropdown estatus
document.querySelectorAll(".dropdown-menu a").forEach(item => {
    item.addEventListener("click", function (e) {
        e.preventDefault();
        
        let dropdown = this.closest(".dropdown");
        let statusText = dropdown.querySelector(".selected-status");
        let statusDot = dropdown.querySelector(".status-dot");
        
        // Obtener valores seleccionados
        let newText = this.innerText.trim();
        let newColor = this.dataset.color;
        
        // Actualizar el texto y el color en el botón
        statusText.innerText = newText;
        statusDot.className = "status-dot " + newColor;
    });
});
