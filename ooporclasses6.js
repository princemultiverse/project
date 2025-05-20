

class car{
    constructor(brand,color){
        this.brand= brand;
        this.color= color;
    }
    showdetails(){
        console.log(`this is a ${this.color} ${this.brand}`)
    }
}

class Supercars extends car{
    constructor(brand, color, topspeed){
        super(brand,color);
        this.topspeed = topspeed;
    }

    boost(){
        console.log(`this ${this.color}${this.brand} go up to ${this.topspeed} km/h! 💨 `)
    }
}

const car1 = new car("BMW","Matte Black")


const car2 = new Supercars("Ferrari","red","307")

const car3 = new Supercars("Porsche gt3","carbon fiber","217")

car1.showdetails();

car2.boost();

car3.boost();


