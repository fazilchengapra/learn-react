import { sum } from "../sum";

test("find sum of two numbers", () => {
  const result = sum(5, 5);

  expect(result).toBe(10)
});
