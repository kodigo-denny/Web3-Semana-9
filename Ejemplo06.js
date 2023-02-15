class Figura{
    lado1

    constructor(lado1){
        this.lado1 = lado1
    }

    area(){
        return this.lado1
    }
}

class Cuadrado extends Figura{

    constructor(lado1){
        super(lado1)
    }

    area(){
        return Math.pow(this.lado1, 2)
    }
}

class Circulo extends Cuadrado{
    constructor(lado1){
        super(lado1)
    }

    area(){
        return Math.PI * super.area()
    }
}

class Rectangulo extends Figura{
    lado2

    constructor(base, altura){
        super(base)
        this.lado2 = altura
    }

    area(){
        return this.lado1 * this.lado2
    }
}

class Triangulo extends Rectangulo{

    constructor(base, altura){
        super(base, altura)
    }

    area(){
        return super.area() / 2
    }
}

class Trapecio extends Triangulo{
    constructor(baseMayor, baseMenor, altura){
        super(baseMayor+baseMenor, altura)
    }
}

class Romboide extends Rectangulo{

    constructor(base, altura){
        super(base, altura)
    }
}