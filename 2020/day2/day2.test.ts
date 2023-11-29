import { describe, expect, test } from "vitest";
import { day2 } from ".";

const testInput = `1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc`;

describe("day2", () => {
  test("testInput", () => {
    const [got1, _] = day2(testInput);

    const want1 = 2;

    expect(got1).toBe(want1);
  });
});
