import { describe, expect, test } from "vitest";
import { day4 } from ".";

const testInput = `ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
byr:1937 iyr:2017 cid:147 hgt:183cm

iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884
hcl:#cfa07d byr:1929

hcl:#ae17e1 iyr:2013
eyr:2024
ecl:brn pid:760753108 byr:1931
hgt:179cm

hcl:#cfa07d eyr:2025 pid:166559648
iyr:2011 ecl:brn hgt:59in`;

describe("Day4", () => {
  test("testInput", () => {
    const want1 = 2;
    const want2 = 2;

    const [got1, got2] = day4(testInput);

    expect(got1).toBe(want1);
    expect(got2).toBe(want2);
  });
});
