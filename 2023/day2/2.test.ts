import { describe, test, expect } from "vitest";
import { day2 } from ".";
import { readFileToStr } from "../lib/input";

describe("Day 2", () => {
  test("testInput", () => {
    const want1 = 8;
    const want2 = 2286;

    const input = readFileToStr("day2/test.input.txt");
    const { p1, p2 } = day2(input);

    expect(p1).toBe(want1);
    expect(p2).toBe(want2);
  });
});
