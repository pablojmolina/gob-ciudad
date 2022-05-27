let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let mail = document.getElementById("mail");
let tickets = document.getElementById("tickets");
let categoria = document.getElementById("categoria");

function resumen() {
    nombre.classList.remove("is-invalid")
    apellido.classList.remove("is-invalid")
    mail.classList.remove("is-invalid")
    tickets.classList.remove("is-invalid")
    categoria.classList.remove("is-invalid")

    if (nombre.value === "") {
        swal({ title: "Atencion!", text: "Escribe tu nombre!", icon: "warning", });
        nombre.classList.add("is-invalid");
        nombre.focus();
        return;
    }
    if (apellido.value === "") {
        swal({ title: "Atencion!", text: "Escribe tu apellido!", icon: "warning", });
        apellido.classList.add("is-invalid");
        apellido.focus();
        return;
    }
    if (mail.value === "") {

        swal({ title: "Atencion!", text: "Escribe tu Email!", icon: "warning", });
        mail.classList.add("is-invalid");
        mail.focus();
        return;
    }
    const emailValido = mail => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
    }
    if (!emailValido(mail.value)) {
        swal({ title: "Atencion!", text: "Escribe correctamente tu email", icon: "warning", });
        mail.classList.add("is-invalid");
        mail.focus();
        return;
    }
    if ((tickets.value == 0) || (isNaN(tickets.value))) {
        swal({ title: "Atencion!", text: "Por favor, ingresa la cantidad de tickets correctamente!", icon: "warning", });
        tickets.classList.add("is-invalid");
        tickets.focus();
        return;
    }
    if (categoria.value == "") {
        swal({ title: "Atencion!", text: "Debes seleccionar una categoria!", icon: "warning", });
        categoria.classList.add("is-invalid");
        categoria.focus();
        return;
    }
    let cantidadTickets = (tickets.value);
    let totalCompra = 0
    switch (categoria.value) {
        case "Estudiante": // Estudiante 80% descuento
            totalCompra = cantidadTickets * 40
            break;
        case "Trainee": // Trainee 50% descuento
            totalCompra = cantidadTickets * 100
            break;
        case "Junior": // Junior 15% descuento
            totalCompra = cantidadTickets * 170
            break;
        case "Ninguno": // Junior 15% descuento
            totalCompra = cantidadTickets * 200
            break;
    }
    total.innerHTML = totalCompra;
    tvtickets = String(totalCompra)
    swal({ title: "El total de tu compra es: $" + tvtickets, text: "", icon: "success", });
}
function borrar() {
    nombre.classList.remove("is-invalid")
    apellido.classList.remove("is-invalid")
    mail.classList.remove("is-invalid")
    tickets.classList.remove("is-invalid")
    categoria.classList.remove("is-invalid")
    total.innerHTML = "";
}
botonResumen.addEventListener('click', total_a_pagar);
botonBorrar.addEventListener('click', borrar);