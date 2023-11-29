/**
ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
byr:1937 iyr:2017 cid:147 hgt:183cm

iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884
hcl:#cfa07d byr:1929

hcl:#ae17e1 iyr:2013
eyr:2024
ecl:brn pid:760753108 byr:1931
hgt:179cm

hcl:#cfa07d eyr:2025 pid:166559648
iyr:2011 ecl:brn hgt:59in

1. Passport fiels are separated either through spaces or new lines
2. Empty lines separade passports

--- Part 2 ---

- `byr` (Birth Year) - four digits; at least 1920 and at most 2002.
- `iyr` (Issue Year) - four digits; at least 2010 and at most 2020.
- `eyr` (Expiration Year) - four digits; at least 2020 and at most 2030.
- `hgt` (Height) - a number followed by either cm or in:
- `If` cm, the number must be at least 150 and at most 193.
- `If` in, the number must be at least 59 and at most 76.
- `hcl` (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
- `ecl` (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
- `pid` (Passport ID) - a nine-digit number, including leading zeroes.
- `cid` (Country ID) - ignored, missing or not.
*/

enum PassportKey {
  BYR = "byr",
  IYR = "iyr",
  EYR = "eyr",
  HGT = "hgt",
  HCL = "hcl",
  ECL = "ecl",
  PID = "pid",
  CID = "cid",
}

type Passport = {
  [key in PassportKey]?: string;
};

const optionalKey = PassportKey.CID;

const requiredKeys = Object.values(PassportKey).filter(
  (key) => key != optionalKey,
);

export function day4(input: string): [number, number] {
  const passports = parseInput(input);
  return [part1(passports), part2(passports)];
}

function parseInput(input: string): Passport[] {
  let passports = [];

  let newPassport: Passport = {};
  for (const line of input.split("\n")) {
    if (line.length == 0) {
      passports.push(newPassport);
      newPassport = {};
      continue;
    }

    line.split(" ").forEach((property) => {
      const keyValue = property.split(":");
      const key = keyValue[0] as PassportKey;
      const value = keyValue[1];

      if (!key || !value) throw new Error(`invalid input line: ${line}`);
      if (!Object.values(PassportKey).includes(key))
        throw new Error(`invalid passport key ${key} , ${line}`);

      newPassport[key] = value;
    });
  }

  // last passport on input file
  passports.push(newPassport);

  return passports;
}

function part1(passports: Passport[]): number {
  let valid = 0;

  for (const passport of passports) {
    const missingRequirement = requiredKeys.some((key) => !passport[key]);
    if (!missingRequirement) valid++;
  }

  return valid;
}

function part2(passports: Passport[]): number {
  type passportValidators = {
    [key in PassportKey]: (value: string) => boolean;
  };

  const HEXCOLOR = /^#[0-9a-f]{6}$/;
  const INTEGER = /^[0-9]+$/;
  const NINE_DIGIT_ID = /^[0-9]{9}$/;

  const eyeColors = ["amb", "blu", "brn", "gry", "gry", "grn", "hzl", "oth"];

  const isValidHeight = (height: string) => {
    const suffix = height.substring(height.length - 2);
    const h = height.replace(suffix, "");

    const isValidSuffix = suffix == "cm" || suffix == "in";
    const isInteger = INTEGER.test(h);

    let isValidHeight = false;
    if (suffix == "cm") isValidHeight = +h >= 150 && +h <= 193;
    if (suffix == "in") isValidHeight = +h >= 59 && +h <= 76;

    return isInteger && isValidHeight && isValidSuffix;
  };

  const validators: passportValidators = {
    [PassportKey.BYR]: (year: string) => +year >= 1920 && +year <= 2002,
    [PassportKey.IYR]: (year: string) => +year >= 2010 && +year <= 2020,
    [PassportKey.EYR]: (year: string) => +year >= 2020 && +year <= 2030,
    [PassportKey.ECL]: (eye: string) => eyeColors.some((color) => color == eye),
    [PassportKey.PID]: (id: string) => NINE_DIGIT_ID.test(id),
    [PassportKey.HCL]: (color: string) => HEXCOLOR.test(color),
    [PassportKey.CID]: (_: string) => true,
    [PassportKey.HGT]: isValidHeight,
  };

  return passports.filter((passport) => {
    const isMissingRequirement = requiredKeys.some((key) => !passport[key]);
    const hasInvalidContraint = Object.keys(passport).some((key) => {
      const value = passport[key as PassportKey];
      if (!value) throw new Error(`invalid passport ${passport}`);
      const validate = validators[key as PassportKey];
      return !validate(value);
    });

    return !isMissingRequirement && !hasInvalidContraint;
  }).length;
}
