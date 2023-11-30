import { describe, expect, test } from "vitest";
import { day6 } from ".";

describe("Day6", () => {
  test("testInput", () => {
    const testInput = `abc

a
b
c

ab
ac

a
a
a
a

b`;

    const want1 = 11;
    const want2 = 6;

    const [got1, got2] = day6(testInput);

    expect(got1).toBe(want1);
    expect(got2).toBe(want2);
  });
});
