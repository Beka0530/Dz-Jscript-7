class Transport {
    constructor(name,length, weight, color) {
        this.name = name
        this.length = length
        this.weight = weight
        this.color = color
    }
}

class Car extends Transport {
    constructor(name, length, weight, color, model, engine, speed) {
        super(name, length, weight, color);
        this.model = model
        this.engine = engine
        this.speed = speed
    }

    startEngine () {
        console.log(this.model)
        console.log(this.engine)
        console.log(this.speed)
    }

}

const car = new Car ("BMW", 3.5, "1.8тонн", "darkgrey",
    "M5 F90", "800 лошадиных сил", "420 км/ч")
console.log(car)
car.startEngine()



class Plane extends Transport {
    constructor(name, length, weight, color, model, speed, height) {
        super(name, length, weight, color);
        this.model = model
        this.speed = speed
        this.height = height
    }
    startEngine () {
        console.log(this.model)
        console.log(this.speed)
        console.log(this.height)
    }
}

const plane = new Plane ("Eclipse", 10.20, "5 тонн", "white",
    "Eclipse 500", "685 км/ч", 3.35)
console.log(plane)
plane.startEngine()


class Boat extends Transport {
    constructor(name,length, weight, color, speed, diving) {
        super(name, length, weight, color);
        this.speed = speed
        this.diving = diving
    }
    startEngine (){
        console.log(this.name)
        console.log(this.speed)
        console.log(this.diving)
    }
}

const boat = new Boat ("941 Акула", "172,8 м", "23,3 м",
    "grey", "46,3 км/ч", "500м")
console.log(boat)
boat.startEngine()