function getIndex(arr, num) {
    for (let i in arr) {
      if (arr[i] == num) {
        return i
      }
    }
  }
   
  const arrayOfNums = [1,6,7,8,3,4,5,6];
  getIndex(arrayOfNums, 5)