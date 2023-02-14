class Ave extends Animal{
    tipo

    constructor(color, peso, tipo){
        super(color, peso)
        this.tipo = tipo
    }

    volar(){
        console.log("Funcion de volar")
    }
}

class Ave2 extends Ave{

    constructor(color, peso, tipo){
        super(color, peso, tipo)
    }
}