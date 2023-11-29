import { describe, test, expect } from "vitest";
import { day1 } from ".";

describe("Day1", () => {
  test("testInput", () => {
    const testTarget = 2020;

    const testInput = `1721
    979
    366
    299
    675
    1456`;

    const want1 = 514579;
    const want2 = 241861950;

    const [got1, got2] = day1(testInput, testTarget);

    expect(got1).toBe(want1);
    expect(got2).toBe(want2);
  });

  test("invalid input", () => {
    const testTarget = 3000;
    const testInput = `1
        2
        3
        4
        979
        366
        299
        69420`;

    const want1 = -1; // not found
    const want2 = -1; // not found

    const [got1, got2] = day1(testInput, testTarget);

    expect(got1).toBe(want1);
    expect(got2).toBe(want2);
  });
});
