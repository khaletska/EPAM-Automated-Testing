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

console.log(isPrime('11'))
console.log(isPrime(1234567890))
console.log(isPrime(342))
console.log(isPrime(13))