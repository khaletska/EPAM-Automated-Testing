function numToBool(arr) {
    const boolArr = arr.map(num => Boolean(num))
    console.log(boolArr)
  }
  
  const arrayOfNums = [-12,-1,0,1,12,123,1234];
  numToBool(arrayOfNums)