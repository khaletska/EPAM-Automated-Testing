function isPrime(num) {
	if (num <= 1) {
		return false
	}

	for (let i = 2; i*i <= num; i++) {
		if (num % i == 0) {
			return false
		}
	}

	return true
}

function printOdd(num) {
  while (num > 0) {
    if  (isPrime(num)) {
    console.log(num)
	}
    num--
  }
}

printOdd(100)