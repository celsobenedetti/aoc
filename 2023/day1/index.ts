export function day1(input: string): { day: number; p1: number; p2: number } {
  const lines = input.split("\n").filter((l) => !!l.length);

  return {
    day: 1,
    p1: part1(lines),
    p2: part2(lines),
  };
}

const DIGIT = /[0-9]/;
const NON_DIGITS = /[^0-9]/g;

const numbers = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
  zero: "0",
};

export function part1(lines: string[]): number {
  return lines.reduce((sum, line) => {
    const digits = line.replace(NON_DIGITS, "");
    const first = digits.at(0);
    const last = digits.at(-1);
    if (!first || !last) throw new Error(`Invalid input line ${line}`);

    return sum + +(first + last);
  }, 0);
}

export function part2(lines: string[]): number {
  return lines.reduce((sum, line) => {
    const first = findFirstDigit(line);
    const last = findLastDigit(line);

    return sum + +(first + last);
  }, 0);
}

export function findFirstDigit(line: string) {
  if (line.at(0)?.match(DIGIT)) {
    return line[0];
  }

  for (let i = 0; i < line.length; i++) {
    let builder = line[i];
    for (let j = i + 1; j < line.length; j++) {
      if (line[j].match(DIGIT)) {
        return line[j];
      }

      builder += line[j];
      for (const [number, n] of Object.entries(numbers)) {
        if (builder.includes(number)) {
          return n;
        }
      }
    }
  }
  throw new Error(`First not found: ${line}`);
}

export function findLastDigit(line: string) {
  if (line.at(-1)?.match(DIGIT)) {
    return line.at(-1);
  }

  for (let i = line.length - 1; i >= 0; i--) {
    let builder = line[i];

    for (let j = i - 1; j >= 0; j--) {
      if (line[j].match(DIGIT)) {
        return line[j];
      }

      builder = line[j] + builder;
      for (const [number, n] of Object.entries(numbers)) {
        if (builder.includes(number)) {
          return n;
        }
      }
    }
  }
  throw new Error(`Last not found: ${line}`);
}
