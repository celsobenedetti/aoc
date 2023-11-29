// Example input:
// 1-3 a: abcde
// 1-3 b: cdefg
// 2-9 c: ccccccccc

class PasswordItem {
  min: number;
  max: number;
  target: string;
  password: string;

  constructor(min: number, max: number, target: string, password: string) {
    this.min = min;
    this.max = max;
    this.target = target;
    this.password = password;
  }

  countOccurrences(): number {
    return this.password.split("").filter((char) => char == this.target).length;
  }

  isValid(): boolean {
    const n = this.countOccurrences();
    return n >= this.min && n <= this.max;
  }
}

export function parseInput(input: string): PasswordItem[] {
  const lineToPasswordItem = (line: string): PasswordItem => {
    let [minMax, target, password] = line.split(" ");
    if (!minMax || !target || !password)
      throw new Error(`invalid input line: ${line}`);

    let [min, max] = minMax.split("-");
    if (!min || !max) throw new Error(`invalid minMax input line: ${line}`);

    target = target.replace(":", "").trim();
    min = min.trim();
    max = max.trim();
    password = password.trim();

    return new PasswordItem(+min, +max, target, password);
  };

  return input
    .split("\n")
    .filter((line) => !!line.length)
    .map(lineToPasswordItem);
}

function part1(input: PasswordItem[]): number {
  let total = 0;
  for (const item of input) {
    if (item.isValid()) total++;
  }
  return total;
}

export function day2(input: string): [number, number] {
  const inputLines = parseInput(input);
  return [part1(inputLines), -1];
}
