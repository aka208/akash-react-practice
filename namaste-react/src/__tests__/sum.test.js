const { sum } = require("../components/sum");

test("Sum function should calculate sum of two numbers", () => {
  const result = sum(1, 3);
  expect(result).toBe(4);
});
