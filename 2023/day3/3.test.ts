import { describe, test, expect } from "vitest";

import { readFileToStr } from "../lib/input";
import { day3, getNumberAtIndex } from ".";

// 467..114..
// ...*......
// ..35..633.
// ......#...
// 617*......
// .....+.58.
// ..592.....
// ......755.
// ...$.*....
// .664.598..

const inputFile = "day3/test.input.txt";

describe("Day 3", () => {
    describe("testInput", () => {
        const input = readFileToStr(inputFile);
        const want1 = 4361;
        const want2 = 467835;

        const { p1, p2 } = day3(input);

        test("Part1", () => expect(p1).toBe(want1));
        test("Part2", () => expect(p2).toBe(want2));
    });

    describe("utility functions", () => {
        test("getNumberAtIndex", () => {
            const lines = readFileToStr(inputFile).split("\n");

            expect(getNumberAtIndex(0, lines[0])).toBe(467);
            expect(getNumberAtIndex(1, lines[0])).toBe(467);
            expect(getNumberAtIndex(2, lines[0])).toBe(467);

            expect(getNumberAtIndex(5, lines[0])).toBe(114);
            expect(getNumberAtIndex(6, lines[0])).toBe(114);
            expect(getNumberAtIndex(7, lines[0])).toBe(114);

            expect(getNumberAtIndex(2, lines[2])).toBe(35);
            expect(getNumberAtIndex(3, lines[2])).toBe(35);

            expect(getNumberAtIndex(6, lines[2])).toBe(633);
            expect(getNumberAtIndex(7, lines[2])).toBe(633);
            expect(getNumberAtIndex(8, lines[2])).toBe(633);

            expect(getNumberAtIndex(0, lines[4])).toBe(617);
            expect(getNumberAtIndex(1, lines[4])).toBe(617);
            expect(getNumberAtIndex(2, lines[4])).toBe(617);

            expect(getNumberAtIndex(7, lines[5])).toBe(58);
            expect(getNumberAtIndex(8, lines[5])).toBe(58);

            expect(getNumberAtIndex(2, lines[6])).toBe(592);
            expect(getNumberAtIndex(3, lines[6])).toBe(592);
            expect(getNumberAtIndex(4, lines[6])).toBe(592);

            expect(getNumberAtIndex(6, lines[7])).toBe(755);
            expect(getNumberAtIndex(7, lines[7])).toBe(755);
            expect(getNumberAtIndex(8, lines[7])).toBe(755);

            expect(getNumberAtIndex(1, lines[9])).toBe(664);
            expect(getNumberAtIndex(2, lines[9])).toBe(664);
            expect(getNumberAtIndex(3, lines[9])).toBe(664);

            expect(getNumberAtIndex(5, lines[9])).toBe(598);
            expect(getNumberAtIndex(6, lines[9])).toBe(598);
            expect(getNumberAtIndex(7, lines[9])).toBe(598);
        });
    });
});
