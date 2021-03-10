const Calculator = require("./calculator.js");

let c = new Calculator();

test("When numbers are 1 and 1", () => {
  expect(c.multiply(1, 1)).toBe(1);
});

test("When numbers are 2 and 0", () => {
  expect(c.multiply(2, 0)).toBe(0);
});

test("When both the numbers are 2*10^9", () => {
  let actual = c.multiply(2 * Math.pow(10, 9), 2 * Math.pow(10, 9));
  expect(actual).toBe(4 * Math.pow(10, 18));
});
