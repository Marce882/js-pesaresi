// Saludo

function saludar(){
    let ejemploHora = new Date()

    let hora = ejemploHora.getHours()
    console.log(hora)

if (hora < 5 || hora >20) {
    saludo = "Buenas noches, "
    
} else if (hora >4 && hora < 13){
    saludo = "Buenos dias, "
    
} else if (hora >12 && hora <21){
    saludo = "Buenas tardes, "

}
console.log(saludo)
}
// Pasajeros

const reservas = []

// Grilla de viajes

const grillaObj = [{origen:'Cañuelas',destino:'Capital Federal',horario:8,dia:'8/7/22'},
                {origen:'Cañuelas',destino:'Capital Federal',horario:10,dia:'8/7/22'},
                {origen:'Cañuelas',destino:'Capital Federal',horario:12,dia:'8/7/22'},
                {origen:'Capital Federal',destino:'Cañuelas',horario:9,dia:'8/7/22'},
                {origen:'Capital Federal',destino:'Cañuelas',horario:11,dia:'8/7/22'},
                {origen:'Capital Federal',destino:'Cañuelas',horario:13,dia:'8/7/22'},
                {origen:'Cañuelas',destino:'Capital Federal',horario:8,dia:'9/7/22'},
                {origen:'Cañuelas',destino:'Capital Federal',horario:10,dia:'9/7/22'},
                {origen:'Cañuelas',destino:'Capital Federal',horario:12,dia:'9/7/22'},
                {origen:'Capital Federal',destino:'Cañuelas',horario:9,dia:'9/7/22'},
                {origen:'Capital Federal',destino:'Cañuelas',horario:11,dia:'9/7/22'},
                {origen:'Capital Federal',destino:'Cañuelas',horario:13,dia:'9/7/22'}] 



// Viajes semanales

function abono(viajesSem) {
    pasaje = 600
    if (viajesSem < 3){
        pasaje = 600

    }else if(viajesSem > 2 && viajesSem < 5){
        pasaje = (pasaje -(pasaje*0.1))

    }else if(viajesSem > 4){
        pasaje = (pasaje -(pasaje*0.15))

    }
    console.log(`El valor de cada pasaje seria $ ${pasaje} porque usted realiza ${viajesSem} viaje/s semanales`)
}

saludar()
//abono(5)

// Destinos
let destino

do {
    destino = prompt(`${saludo}ingrese el codigo de su destino
                            - Cañuelas (CAN)
                            - Capital Federal (CABA)`)
    destino = destino.toLowerCase()

if (destino === "can") {
    for (const data of grillaObj) {
        if (data.destino === 'Cañuelas'){
            console.log (`Viajes a ${data.destino} | ${data.horario}hs | ${data.dia} `)
        }
    }
    console.log("eligió Cañuelas")
    break
} else if (destino=== "caba") {
    for (const data of grillaObj) {
        if (data.destino === 'Capital Federal'){
            console.log (`Viajes a ${data.destino} | ${data.horario}hs | ${data.dia} `)
        }
    }
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

let diaViaje
let diaViajeOk

do {
    diaViaje = prompt(`Ingrese el dia que desea viajar (dd/mm/aa)`)
    diaViajeOk = true

} while (diaViajeOk === false);

// Horarios (Destino Canuelas: 9hs, 11hs, 13hs) (Destino Capital Federal: 8hs, 10hs, 12hs)

if (destino==="can") {
    horariosViaje = "a Cañuelas: 9hs - 11hs - 13hs"

}else if (destino ==="caba"){
    horariosViaje = "a Capital Federal: 8hs - 10hs - 12hs"
}

let horario
let horarioOk

do {
    horario = prompt(`Ingrese el horario en el que desea viajar ${horariosViaje}`)

    if ((destino ==="can") && (horario ==="9" || horario ==="11" || horario ==="13") ) {
        console.log(`Destino Canuelas a las ${horario} hs`)
        //alert(`Destino Canuelas a las ${horario} hs`)
        horarioOk = true
    } else if ((destino ==="caba") && (horario ==="8" || horario ==="10" || horario ==="12")) {
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

reservas.push({destino:destinotxt,dia:diaViaje,horario:horario,pasajero:nombre,dni:dni})
console.log(reservas[reservas.length-1])

alert (`
        Detalle de la reserva:
        - Destino: ${destinotxt}
        - Dia: ${diaViaje}
        - Horario: ${horario} hs
        
        Datos del pasajero:
        - Nombre: ${nombre}
        - DNI: ${dni}`)
