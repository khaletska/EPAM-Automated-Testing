function printOdd(num) {
  while (num > 0) {
    if  (num % 2 == 1) {
    console.log(num)
	}
    num--
  }
}

printOdd(100)