class Calculator {
  constructor() {
    this.PI = Math.PI;
    this.E = Math.E;
  }
  /**
   * calculating the ratio
   * @param {Number} x
   * @param {Number} y
   * @param {Number} width
   * @returns  Number
   */
  ratio(x, y, width) {
    return (width * y) / x;
  }
  /**
   * calculating the Percentage
   * @param {Number} x
   * @param {Number} y
   * @returns  Number
   */
  percentage(x, y) {
    const toPercentage = (x / y) * 100;
    return y === 0 ? "Error:Divisor cannot be zero " : `${toPercentage}`;
  }
  /**
   * calculating the Sum
   * @param {Number} x
   * @param {Number} y
   * @returns  Sum
   */
  add(x, y) {
    return x + y;
  }

  /**
   * calculating the Products
   * @param {Number} x
   * @param {Number} y
   * @returns  Number
   */
  multiply(x, y) {
    return x * y;
  }

  /**
   * dividing two numbers
   * @param {Number} x
   * @param {Number} y
   * @returns  Number
   */
  divide(x, y) {
    if (y !== 0) {
      return x / y;
    } else {
      return `Error: Divisor cannot be zero`;
    }
  }
  /**
   * dividing two numbers and give back remainder
   * @param {Number} x
   * @param {Number} y
   * @returns  Number
   */
  remainder(x, y) {
    if (y !== 0) {
      return x % y;
    } else {
      return `Error: Divisor cannot be zero`;
    }
  }
  /**
   * expand  the x by y
   * @param {Number} x
   * @param {Number} y
   * @returns  Number
   */
  elevate(x, y) {
    return x ** y;
  }
  /**
   * calculating the root of the  x
   * @param {Number} x
   * @param {Number} y
   * @returns  Number
   */
  sqrt(x) {
    if (x > 0) {
      return Math.sqrt(x);
    } else {
      return `Error: Cannot calculate the square root of a negative number.`;
    }
  }
  /**
   * subtracting two numbers
   * @param {Number} x
   * @param {Number} y
   * @returns  Number
   */
  subtract(x, y) {
    return y - x;
  }
}

const calc = new Calculator();

console.log(calc.ratio(5, 7, 300));
console.log(calc.percentage(3, 12));
console.log(calc.add(5, 7));
console.log(calc.subtract(5, 7));
console.log(calc.multiply(5, 7));
console.log(calc.divide(35, 7));
console.log(calc.remainder(7, 5));
console.log(calc.elevate(5, 3));
console.log(calc.sqrt(25));
