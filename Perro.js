class Perro extends Animal{
    raza

    constructor(color, peso, raza){
        super(color, peso)
        this.raza = raza
    }

    ladrar(){
        console.log("Funcion de ladrar")
    }
}

