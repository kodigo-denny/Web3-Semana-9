//DESTRUCTURANDO OBJETOS
class Perro{
    raza
    color
    edad
    propietario
    constructor(raza, color, edad, propietario){
        this.raza = raza
        this.color = color
        this.edad = edad
        this.propietario = propietario
    }
}
/*
const mascota={
    raza:'Salchicha',
    color:"Pardo",
    edad:3, 
    propietario:"Daniel Gutierrez"
}
*/

let mascota = new Perro('Salchicha', 'Pardo', 3, "Daniel Gutierrez")

//console.log(mascota, typeof(mascota))

const{raza,color,edad,propietario}=mascota

/*
console.log(edad)
console.log(propietario)
console.log(raza)
*/


//DESTRUCTURANDO ARRAYS 

const camareras=['Juanita','Carla','Michaella','Gabriela']

const[Juanita,Carla,Michaella,Gabriela]=camareras

console.log(Carla)
