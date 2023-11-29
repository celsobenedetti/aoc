import { describe, expect, test } from "vitest";
import { day3 } from ".";

const testInput = `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`;

describe("Day3", () => {
  test("testInput", () => {
    const want1 = 7;
    const want2 = 336;

    const [got1, got2] = day3(testInput);

    expect(got1).toBe(want1);
    expect(got2).toBe(want2);
  });
});
