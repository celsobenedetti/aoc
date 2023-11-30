import { describe, expect, test } from "vitest";
import { binaryPartitionSearch, day5, parseInput } from ".";

describe("Day5", () => {
  test("Test Input 1", () => {
    const input = "FBFBBFFRLR";

    const want1 = 357;
    const want2 = 358;

    const [got1, got2] = day5(input);

    expect(got1).toBe(want1);
    expect(got2).toBe(want2);
  });

  test("Test Input 2", () => {
    const input = "BFFFBBFRRR";

    const want1 = 567;
    const want2 = 568;

    const [got1, got2] = day5(input);

    expect(got1).toBe(want1);
    expect(got2).toBe(want2);
  });

  test("Test Input 3", () => {
    const input = "FFFBBBFRRR";

    const want1 = 119;
    const want2 = 120;

    const [got1, got2] = day5(input);

    expect(got1).toBe(want1);
    expect(got2).toBe(want2);
  });

  test("Test Input 4", () => {
    const input = "BBFFBBFRLL";

    const want1 = 820;
    const want2 = 821;

    const [got1, got2] = day5(input);

    expect(got1).toBe(want1);
    expect(got2).toBe(want2);
  });

  test("parseInput", () => {
    const input1 = "FBFBBFFRLR";
    const input2 = "BFFFBBFRRR";
    const input3 = "FFFBBBFRRR";
    const input4 = "BBFFBBFRLL";

    const want1 = [
      [true, false, true, false, false, true, true],
      [false, true, false],
    ];
    const want2 = [
      [false, true, true, true, false, false, true],
      [false, false, false],
    ];

    const want3 = [
      [true, true, true, false, false, false, true],
      [false, false, false],
    ];
    const want4 = [
      [false, false, true, true, false, false, true],
      [false, true, true],
    ];

    const got1 = parseInput(input1)[0];
    const got2 = parseInput(input2)[0];
    const got3 = parseInput(input3)[0];
    const got4 = parseInput(input4)[0];

    expect(got1).toStrictEqual(want1);
    expect(got2).toStrictEqual(want2);
    expect(got3).toStrictEqual(want3);
    expect(got4).toStrictEqual(want4);
  });

  test("binaryPartitionSearch", () => {
    const input1 = [true, false, true, false, false, true, true];
    const input2 = [false, true, false];

    const want1 = 44;
    const want2 = 5;

    const got1 = binaryPartitionSearch(input1);
    const got2 = binaryPartitionSearch(input2);

    expect(got1).toBe(want1);
    expect(got2).toBe(want2);
  });
});
