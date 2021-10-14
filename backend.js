// DESAFIO CLASE 5 - OBJETOS

// Algoritmo que según el ingreso de datos que se solicita al usuario determina si puede adoptar o no un gato de la asociacion 


let adoptante;
let desestimado;

class aprobados {
    constructor(nombre, edad, zonaDomicilio, protecciones, empleo){
        this.nombre = nombre;
        this.edad = edad;
        this.zonaDomicilio = zonaDomicilio;
        this.protecciones = protecciones;
        this.empleo = empleo;
    }
}

class rechazados {
    constructor(nombre, edad, zonaDomicilio, protecciones, empleo){
        this.nombre = nombre;
        this.edad = edad;
        this.zonaDomicilio = zonaDomicilio;
        this.protecciones = protecciones;
        this.empleo = empleo;
    }
}

class posibleAdoptante {
    constructor(nombre, edad, zonaDomicilio, protecciones, empleo){
        this.nombre = nombre;
        this.edad = edad;
        this.zonaDomicilio = zonaDomicilio;
        this.protecciones = protecciones;
        this.empleo = empleo;
    }

    validaAplicante(){
        if ((this.edad >= 21) && (this.zonaDomicilio == "caba") && (this.protecciones == "si") && (this.empleo == "si")){
            adoptante = new aprobados(this.nombre, this.edad, this.zonaDomicilio, this.protecciones, this.empleo);
            alert("Felicitaciones! Usted reune los requisitos para adoptar. A la brevedad nos estaremos comunicando y a continuación podrá ver los gatitos que tenemos en adopción.");
        }else{
            desestimado = new rechazados(this.nombre, this.edad, this.zonaDomicilio, this.protecciones, this.empleo);
            alert("Usted no reune los requisitos de adopción por lo cual lamentablemente no puede adoptar.");
        }
    }
}

function cargaDatos() {
    
    let nombre = prompt("Nombre completo:");
    let edad = prompt("Edad:");
    let zonaDomicilio = prompt("Zona de residencia: CABA | AMBA").toLocaleLowerCase();
    let protecciones = prompt("¿Cuenta con protecciones en todas las aberturas de su hogar? SI | NO").toLocaleLowerCase();
    let empleo = prompt("¿Cuenta con empleo fijo? SI | NO").toLocaleLowerCase();

    const aplicante = new posibleAdoptante(nombre, edad, zonaDomicilio, protecciones, empleo);
    aplicante.validaAplicante();
}

cargaDatos();
console.log(adoptante);
console.log(desestimado);
