import { describe, test, expect } from "vitest";

import { readFileToStr } from "../lib/input";
import { day3 } from ".";

describe("Day 3", () => {
    test("testInput", () => {
        const input = readFileToStr("day3/test.input.txt");
        const want1 = 4361;

        const { p1 } = day3(input);

        expect(p1).toBe(want1);
    });
});
