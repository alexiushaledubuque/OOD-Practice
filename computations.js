const Addition = class {
  constructor(num1, num2){
    this.num1 = num1;
    this.num2 = num2;
  }

  // getter
  get sumTotal() {
    return this.addValues()
  }

  get difference() {
    return this.subtractValues()
  }

  get product() {
    return this.multiplyValues()
  }

  get quotient() {
    return this.divideValues()
  }
  // setter
  addValues() {
    return this.num1 + this.num2;
  }

  subtractValues() {
    return this.num1 - this.num2
  }

  multiplyValues() {
    return this.num1 * this.num2
  }

  divideValues() {
    return this.num1 / this.num2
  }

}

const test1 = new Addition(4,5);
console.log(test1.sumTotal)

const test2 = new Addition(4,5);
console.log(test2.difference)

const test3 = new Addition(4,5);
console.log(test3.product)

const test4 = new Addition(4,5);
console.log(test4.quotient)