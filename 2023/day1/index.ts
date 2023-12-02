export function day1(input: string): { day: number; p1: number; p2: number } {
  const lines = input.split("\n").filter((l) => !!l.length);

  return {
    day: 1,
    p1: part1(lines),
    p2: part2(lines),
  };
}

function part1(lines: string[]): number {
  const NON_DIGITS = /[^0-9]/g;

  return lines.reduce((sum, line) => {
    const digits = line.replace(NON_DIGITS, "");
    const first = digits.at(0);
    const last = digits.at(-1);
    if (!first || !last) throw new Error(`Invalid input line ${line}`);

    return sum + +(first + last);
  }, 0);
}

function part2(lines: string[]): number {
  return lines.length;
}
