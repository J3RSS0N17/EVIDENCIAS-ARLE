const habitacionesOcupadas = new Set();

const contarLibres = () => 5 - habitacionesOcupadas.size;

const mostrarEstado = () => {let estado = "Estado de habitaciones:\n";
                                for (let i = 1; i <= 5; i++) {estado += `Habitación ${i}: ${habitacionesOcupadas.has(i) ? "Ocupada" : "Libre"}\n`;}
                                estado += `\nTotal de habitaciones libres: ${contarLibres()}`;alert(estado);};

const reservarHabitacion = (num) => {if (num < 1 || num > 5) {alert("Número de habitación inválido. Usa 1-5.");} 
                                        else if (habitacionesOcupadas.has(num)) {alert("Habitación ya ocupada.");} 
                                        else {habitacionesOcupadas.add(num);alert(`Habitación ${num} reservada con éxito.\nHabitaciones libres: ${contarLibres()}`);}};

const liberarHabitacion = (num) => {if (num < 1 || num > 5) {alert("Número de habitación inválido. Usa 1-5.");} 
                                    else if (!habitacionesOcupadas.has(num)) {alert("Habitación ya está libre.");} 
                                    else {habitacionesOcupadas.delete(num);alert(`Habitación ${num} liberada con éxito.\nHabitaciones libres: ${contarLibres()}`);}};

while (true) {let opcion = prompt("1. Ver estado\n2. Reservar habitación\n3. Liberar habitación\n4. Salir\n\nElige una opción:");
            if (opcion === "1") {mostrarEstado();} 
            else if (opcion === "2") {let num = parseInt(prompt("Ingresa el número de habitación (1-5):"));reservarHabitacion(num);} 
            else if (opcion === "3") {let num = parseInt(prompt("Ingresa el número de habitación (1-5):"));liberarHabitacion(num);} 
            else if (opcion === "4") {alert("Saliendo...");break;} 
            else {alert("Opción inválida.");}}