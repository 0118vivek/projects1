document.getElementById('generateButton').addEventListener('click', function() {
    var inputNumber = parseInt(document.getElementById('numberInput').value);
    var primes = generatePrimes(inputNumber);
    document.getElementById('result').innerText = primes.join(', ');
});

function generatePrimes(limit) {
    var primes = [];
    for (var i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

function isPrime(num) {
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num !== 1;
}
