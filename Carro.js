
let estado = document.querySelector('#estado')

class Automovil{
    marca
    modelo
    año
    color
    velocidadMax
    velocidad
    encendido
    velocimetro
    estado

    constructor(marca, modelo, año, color, velocidadMax, velocimetro, estado){
        this.marca = marca
        this.modelo = modelo
        this.año = año
        this.color = color
        this.velocidadMax = velocidadMax
        this.velocidad = 0
        this.encendido = false
        this.velocimetro = velocimetro
        this.estado = estado
        this.actualizarVelocimetro()
        this.actualizarEstado()
    }

    actualizarEstado(){
        let estado = document.querySelector('#'+this.estado)
        estado.value = this.encendido
    }

    actualizarVelocimetro(){
        let velocimetro = document.querySelector('#'+this.velocimetro)
        velocimetro.value = this.velocidad
    }

    acelerar(){
        if(this.velocidad + 10 <= this.velocidadMax && this.encendido==true){
            this.velocidad += 10
            this.actualizarVelocimetro()
        }
        //console.log(this)
    }

    bajarVelocidad(){
        if(this.velocidad-10 >= 0 && this.encendido == true){
            this.velocidad -= 10
            this.actualizarVelocimetro()
        }
            
        //console.log(this)
    }

    encender(){
        this.encendido = true
        this.actualizarEstado()
        //console.log(this)
    }

    apagar(){
        if(this.velocidad == 0){
            this.encendido = false
            this.actualizarEstado()
        }
            
        //console.log(this)
    }
}