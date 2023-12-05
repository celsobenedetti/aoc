import { describe, expect, test } from "vitest";
import { readFileToStr } from "../lib/input";
import { day4 } from ".";

describe("Day4", () => {
    test("testInput", () => {
        const input = readFileToStr("day4/test.input.txt");

        const want1 = 13;
        const want2 = 30;

        const { p1, p2 } = day4(input);

        expect(p1).toBe(want1);
        expect(p2).toBe(want2);
    });
});
