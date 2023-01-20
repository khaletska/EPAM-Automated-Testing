const car = {
    color: "black",
    getPower() {
        console.log(this.power)
    }
}

car.color = "green";
car.getPower()
car.power = "123"
car.getPower()