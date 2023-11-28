import { describe, test, expect } from "vitest";
import { day1 } from ".";

describe("Day1", () => {
  describe("Part1", () => {
    test("testInput", () => {
      const testTarget = 2020;
      const testInput = [1721, 979, 366, 299, 675, 1456];

      const want = 514579;
      const got = day1(testInput, testTarget);

      expect(got).toBe(want);
    });

    test("mockInput", () => {
      const testTarget = 3000;
      const testInput = [1721, 979, 366, 299, 1, 2999];

      const want = 2999;
      const got = day1(testInput, testTarget);

      expect(got).toBe(want);
    });

    test("invalid input", () => {
      const testTarget = 3000;
      const testInput = [1, 2, 3, 4, 979, 366, 299, 69420];

      const want = -1; // not found
      const got = day1(testInput, testTarget);

      expect(got).toBe(want);
    });
  });
});
