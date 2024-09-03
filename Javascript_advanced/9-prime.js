let totalPrimeNumbers = 0;

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let div = 5; div * div <= num; div += 6) {
    if (num % div === 0 || num % (div + 2) === 0) return false;
  }

  return true; // Is prime
};

countPrimeNumbers = () => {
  for (let i = 2; i <= 200; i++) {
    if (isPrime(i)) {
      totalPrimeNumbers += 1;
    }
  }
  console.log(totalPrimeNumbers);
};

function main() {
  countPrimeNumbers();
}
main();
