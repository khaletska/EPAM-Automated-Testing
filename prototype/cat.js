const animal = {
    move() {
      console.log("Animal move");
    }
  }
  
  const cat = {
    __proto__: animal
  }
  
  cat.move();