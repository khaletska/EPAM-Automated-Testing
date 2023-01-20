function warehouse(apples, pears) {
    if (typeof apples == "number" && typeof pears == "number") {
        return apples + pears
    } 
    return "Wrong type of arguments"
  }
  
  console.log(warehouse(5,8))
  console.log(warehouse('hello',8))