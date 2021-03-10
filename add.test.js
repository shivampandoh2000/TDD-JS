const Calculator = require("./calculator.js");

let c = new Calculator();

test("When numbers are 1 and 1", () => {
  expect(c.add(1, 1)).toBe(2);
});

test("When numbers are 2 and 3", () => {
  expect(c.add(2, 3)).toBe(5);
});

test("When both the numbers are 2*10^9", () => {
  let actual = c.add(2 * Math.pow(10, 9), 2 * Math.pow(10, 9));
  expect(actual).toBe(4 * Math.pow(10, 9));
});
