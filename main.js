function saludar(params) {
    
}

// Destinos

let destino = prompt(`Ingrese el codigo de su destino
                        - Cañuelas (CAN)
                        - Capital Federal (CABA)`)
destino = destino.toLowerCase()

if (destino === "can") {
    alert ("eligió Cañuelas")
} else if (destino=== "caba") {
    alert ("eligió Capital Federal")

}else{
    alert (`Debe seleccionar entre la opciones disponibles
                - CAN 
                - CABA`)
}