import { describe, test, expect } from "vitest";
import { readFileToStr } from "../lib/input";
import { day1 } from ".";

describe("day1", () => {
  test("testInput", () => {
    const input = readFileToStr("day1/test.input.txt");
    const want1 = 142;

    const { p1, p2 } = day1(input);

    expect(p1).toBe(want1);
  });
});
