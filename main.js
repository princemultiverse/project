class Animal {

    constructor(name){
        this.name= name;
    }

    eat(){
        console.log(`${this.name} only eats meat 🥩`)
    }
}


class Bird extends Animal{
    constructor(name,canFly){
        super(name);
        this.canFly=canFly;
    }

    fly(){
        if(this.canFly && true){
            console.log(`${this.name} can fly high! 🕊️`)


        }else{
            console.log(`${this.name} can't fly 🐧`)
        }
        
    }
}





const bird1 = new Bird("Eagle", true);

bird1.eat();       
bird1.fly();       

const bird2 = new Bird("Penguin", false);
bird2.fly();       

