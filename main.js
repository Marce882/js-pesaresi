function saludar(params) {
    
}

// Destinos

// let destino = prompt(`Ingrese el codigo de su destino
//                         - Cañuelas (CAN)
//                         - Capital Federal (CABA)`)
// destino = destino.toLowerCase()

// if (destino === "can") {
//     alert ("eligió Cañuelas")
// } else if (destino=== "caba") {
//     alert ("eligió Capital Federal")

// }else{
//     alert (`Debe seleccionar entre la opciones disponibles
//                 - CAN 
//                 - CABA`)
// }

// Horarios
//--------------------------------------------------------------------

// Destinos
let destino

do {
destino = prompt(`Ingrese el codigo de su destino
                        - Cañuelas (CAN)
                        - Capital Federal (CABA)`)
destino = destino.toLowerCase()

if (destino === "can") {
    alert ("eligió Cañuelas")
    break
} else if (destino=== "caba") {
    alert ("eligió Capital Federal")
    break

}else{
    alert (`Debe seleccionar entre la opciones disponibles
                - CAN 
                - CABA`)
}
    
} while (destino!=="can" || destino!=="caba"); 
alert("pasamos")


// Horarios

