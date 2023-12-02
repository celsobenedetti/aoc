import { describe, test, expect } from "vitest";
import { readFileToStr } from "../lib/input";
import { findFirstDigit, findLastDigit, part1, part2 } from ".";

describe("day1", () => {
  test("part1", () => {
    const input = readFileToStr("day1/test.input.txt");

    const want = 142;

    const p1 = part1(input);

    expect(p1).toBe(want);
  });

  test("Part2", () => {
    const input = readFileToStr("day1/test2.input.txt");
    const want = 281;
    const p2 = part2(input);

    expect(p2).toBe(want);
  });

  describe("Helper functions", () => {
    const testCases = [
      { line: "spdzhnt5tpzrkh1fxlnine4skgzdln", first: "5", last: "4" },
      { line: "1onenineqgzcq2eightwonh", first: "1", last: "2" },
      { line: "vfzvds826vtlrcg6rvseven", first: "8", last: "7" },
      { line: "vqmoneight9tknqtcsmb", first: "1", last: "9" },
      { line: "kqrcrqrqjbdeight7ckhr23", first: "8", last: "3" },
      { line: "oneeight2", first: "1", last: "2" },
      { line: "8eightnhtqcggtxc6dfsfcjfpznmsthree", first: "8", last: "3" },
      { line: "sxfvfdkff8dvlmbdktsixmzpnxzmml2", first: "8", last: "2" },
      { line: "9lgmxktj1frxl", first: "9", last: "1" },
    ];

    test("findFirstDigit", () => {
      for (const test of testCases) {
        const want = test.first;
        const got = findFirstDigit(test.line);

        expect(got).toBe(want);
      }
    });

    test("findLastDigit", () => {
      for (const test of testCases) {
        const want = test.last;
        const got = findLastDigit(test.line);

        expect(got).toBe(want);
      }
    });
  });
});
