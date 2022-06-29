// Destinos
let destino

do {
    destino = prompt(`Ingrese el codigo de su destino
                            - Cañuelas (CAN)
                            - Capital Federal (CABA)`)
    destino = destino.toLowerCase()

if (destino === "can") {
    console.log("eligió Cañuelas")
    break
} else if (destino=== "caba") {
    console.log("eligió Capital Federal")
    break

}else{
    alert (`Debe seleccionar entre la opciones disponibles
                - CAN 
                - CABA`)
    console.log("Seleccione can o caba")
}
    
} while (destino!=="can" || destino!=="caba"); 
console.log(`ingresó ${destino}`)

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
        console.log(`Destino Canuelas a las ${horario} hs`)
        //alert(`Destino Canuelas a las ${horario} hs`)
        horarioOk = true
    } else if ((destino ==="caba") && (horario ==="8" || horario ==="11" || horario ==="15")) {
        console.log(`Destino Capital Federal a las ${horario} hs`)
        //alert(`Destino Capital Federal a las ${horario} hs`)
        horarioOk = true
    }else{
        console.log("El horario ingresado no es válido")
        //alert("El horario ingresado no es válido")
        horarioOk = false
    }
} while (horarioOk === false);

// Datos de pasajero

let nombre
let datosOk

do {
    nombre = prompt("Por favor ingrese su nombre y apellido")

    if (nombre!=="" && isNaN(nombre)) {
        console.log("datos ok")
        //alert ("datos ok")
        datosOk = true
        
    } else {
        console.log("datos inválidos")
        //alert("datos mal ingresados")
        datosOk = false
    }
    
} while (datosOk===false);

let dni
let dniOk

do {
    dni = prompt("Por favor ingrese su dni (sin puntos)")

    if ((dni!=="") && (dni.length<9)&& !isNaN(dni)) {
        console.log("dni bien ingresado")
        dniOk = true
    } else {
        console.log("dni mal ingresado")
        dniOk = false
    }

} while (dniOk === false);

let destinotxt

if (destino==="can") {
    destinotxt = "Cañuelas"
    
} else if (destino==="caba") {
    destinotxt = "Capital Federal"
}

alert (`
        Detalle de la reserva:
        - Destino: ${destinotxt}
        - Horario: ${horario} hs
        
        Datos del pasajero:
        - Nombre: ${nombre}
        - DNI: ${dni}`)
