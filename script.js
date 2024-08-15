class Veicle{
    constructor(type, wheels, capacity){
        this.wheels = wheels;
        this.capacity = capacity;
    }
    dirigir(gas){
        setInterval(() => {
            if(gas >=0) console.log(gas, "\n");
            gas -=10;
            if(gas <0) clearInterval()
        },2000)
    }
}

const carro = new Veicle("carro",4,5);
carro.dirigir(100);