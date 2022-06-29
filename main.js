function saludar(params) {
    
}

// Destinos
let destino

do {
    destino = prompt(`Ingrese el codigo de su destino
                            - Cañuelas (CAN)
                            - Capital Federal (CABA)`)
    destino = destino.toLowerCase()

if (destino === "can") {
    //alert ("eligió Cañuelas")
    break
} else if (destino=== "caba") {
    //alert ("eligió Capital Federal")
    break

}else{
    alert (`Debe seleccionar entre la opciones disponibles
                - CAN 
                - CABA`)
}
    
} while (destino!=="can" || destino!=="caba"); 
alert(`mostrar eleccion ${destino}`)

// Dia - Al ingresar el dia de la reserva, el dia debe ser mayor
// a hoy y menor a 30 dias con respecto a la fecha de hoy.

// Horarios (Destino Canuelas: 10hs, 14hs, 18hs) (Destino Capital Federal: 8hs, 11hs, 15hs)

if (destino==="can") {
    horariosViaje = "a Cañuelas: 10hs - 14hs - 18hs"

}else if (destino ==="caba"){
    horariosViaje = "a Capital Federal: 8hs - 11hs - 15hs"
}

let horario
let horarioOk

do {
    horario = prompt(`Ingrese el horario en el que desea viajar ${horariosViaje}`)

    if ((destino ==="can") && (horario ==="10" || horario ==="14" || horario ==="18") ) {
        alert(`Destino Canuelas a las ${horario} hs`)
        horarioOk = true
    } else if ((destino ==="caba") && (horario ==="8" || horario ==="11" || horario ==="15")) {
        alert(`Destino Capital Federal a las ${horario} hs`)
        horarioOk = true
    }else{
        alert("El horario ingresado no es válido")
        horarioOk = false
    }
} while (horarioOk === false);

// Datos de pasajero

let nombre
let dni

do {
    nombre = prompt("Por favor ingrese su nombre y apellido")
    dni = prompt("Por favor ingrese su dni (sin puntos)")
} while (condition);
