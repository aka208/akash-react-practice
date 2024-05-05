const { Sum } = require("../components/Sum");

test("Sum function should calculate sum of two numbers", () => {
  const result = Sum(1, 3);
  expect(result).toBe(4);
});
