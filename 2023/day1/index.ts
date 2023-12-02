export function day1(input: string): { day: number; p1: number; p2: number } {
  return {
    day: 1,
    p1: part1(input),
    p2: part2(input),
  };
}

const DIGIT = /\d/g;

const numbers = new Map([
  ["one", "1"],
  ["two", "2"],
  ["three", "3"],
  ["four", "4"],
  ["five", "5"],
  ["six", "6"],
  ["seven", "7"],
  ["eight", "8"],
  ["nine", "9"],
  ["zero", "0"],
]);

export function part1(input: string): number {
  const toOnlyDigits = (s: string) => s.match(DIGIT)?.toString() || "";

  return input
    .split("\n")
    .map(toOnlyDigits)
    .filter((l) => !!l.length)
    .reduce((sum, line) => {
      const first = line.at(0);
      const last = line.at(-1);
      if (!first || !last) throw new Error(`Invalid input line ${line}`);

      return sum + +(first + last);
    }, 0);
}

export function part2(input: string): number {
  return input
    .split("\n")
    .filter((l) => !!l.length)
    .reduce((sum, line) => {
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
      for (const [number, n] of [...numbers]) {
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
      for (const [number, n] of [...numbers]) {
        if (builder.includes(number)) {
          return n;
        }
      }
    }
  }
  throw new Error(`Last not found: ${line}`);
}
