const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let div = 5; div * div <= num; div += 6) {
    if (num % div === 0 || num % (div + 2) === 0) return false;
  }

  return true; // Is prime
};

const countPrimeNumbers = () => {
  let totalPrimeNumbers = 0;
  for (let i = 2; i <= 100; i++) {
    if (isPrime(i)) {
      totalPrimeNumbers += 1;
    }
  }
  return totalPrimeNumbers;
};

function main() {
  setTimeout(() => {
    const start = performance.now(); // Start time
    let primeCount = 0;
    for (let j = 0; j < 100; j++) {
      primeCount += countPrimeNumbers();
    }
    const end = performance.now(); // End time
    const executionTime = end - start;

    console.log(`Number of prime numbers between 2 and 100 (100 times loop): ${primeCount}`);
    console.log(`Execution time of calculating prime numbers 100 times was ${executionTime} milliseconds.`);
  }, 0);
}

main();
