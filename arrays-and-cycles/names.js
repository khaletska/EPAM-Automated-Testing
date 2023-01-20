function addHello(arr) {
    const newArr = arr.map(name => 'hello '+ name)
    console.log(newArr)
  }
  
  const arrayOfNames = ['name1', 'name2', 'name3', 'name4'];
  addHello(arrayOfNames)
  