// Example input:
// 1-3 a: abcde
// 1-3 b: cdefg
// 2-9 c: ccccccccc

class PasswordItem {
  position1: number;
  position2: number;
  target: string;
  password: string;

  constructor(p1: number, p2: number, target: string, password: string) {
    this.position1 = p1;
    this.position2 = p2;
    this.target = target;
    this.password = password;
  }

  countOccurrences(): number {
    return this.password.split("").filter((char) => char == this.target).length;
  }

  hasValidNumberOfOcurrences(): boolean {
    const n = this.countOccurrences();
    return n >= this.position1 && n <= this.position2;
  }

  hasValidPosition(): boolean {
    if (this.password.length < this.position1)
      throw new Error(`Invalid position error ${this}`);

    const p1Valid = this.password.at(this.position1 - 1) == this.target;

    const p2Valid =
      this.password.length >= this.position2 &&
      this.password.at(this.position2 - 1) == this.target;

    return p1Valid !== p2Valid; // XOR
  }
}

function parseInput(input: string): PasswordItem[] {
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
    if (item.hasValidNumberOfOcurrences()) total++;
  }
  return total;
}

function part2(input: PasswordItem[]): number {
  let total = 0;
  for (const item of input) {
    if (item.hasValidPosition()) total++;
  }
  return total;
}

export function day2(input: string): [number, number] {
  const inputLines = parseInput(input);
  return [part1(inputLines), part2(inputLines)];
}
