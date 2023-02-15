class Animal{

    makeSound(){
        console.log("Sonido por defecto")
    }
}

class Cat extends Animal{

    makeSound(){
        console.log("Maullar")
        super.makeSound()
    }
}

class Dog extends Animal{

    makeSound(){
        console.log("Ladrar")
    }
}