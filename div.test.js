const Calculator = require("./calculator.js");

let c = new Calculator();

test("When numbers are 1 and 1", () => {
  expect(c.divide(1, 1)).toBe(1);
});

test("When numbers are 1 and -1", () => {
  expect(c.divide(1, -1)).toBe(-1);
});

test("When numbers are 2 and 0", () => {
  expect(c.divide(2, 0)).toBe(Infinity);
});

test("when numbers are Infinity and Infinity", () => {
  expect(c.divide(Infinity, Infinity)).toBe(NaN);
});

test("When the numbers are 2*10^9 and 10^9", () => {
  let actual = c.divide(2 * Math.pow(10, 9), 1 * Math.pow(10, 9));
  expect(actual).toBe(2);
});
