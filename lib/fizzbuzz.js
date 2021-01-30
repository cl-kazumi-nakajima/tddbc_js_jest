class FizzBuzz {
  constructor() {
  }

  convert(num) {
    if (num % 3 === 0) {
      return 'Fizz';
    }
    if (num % 5 === 0) {
      return 'Buzz';
    }
    return num.toString();
  }
}

module.exports = FizzBuzz;
