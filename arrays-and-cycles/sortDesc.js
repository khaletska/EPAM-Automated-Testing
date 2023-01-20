function sortDesc(arr) {
    for (let i = 0; i < arr.length; i++) {
      let max = i;
   
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[max] < arr[j]) {
          max = j;
        }
      }
   
      const temp = arr[max];
      arr[max] = arr[i];
      arr[i] = temp;
    }
  }
   
  const arrayOfNums = [1,6,7,8,3,4,5,6];
  sortDesc(arrayOfNums)