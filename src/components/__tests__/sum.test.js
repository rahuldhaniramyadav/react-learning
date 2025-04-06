import { sum } from "../sum";

test("sum of 2 numbers", () => {
  const res = sum(1,4);
  expect(res).toBe(5);
})