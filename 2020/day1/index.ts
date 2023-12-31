/** find the first two entries that sum to @target and return product of the numbers */
function part1(input: number[], target: number) {
  for (let i = 0; i < input.length - 1; i++) {
    const curr = input[i];
    for (let j = i + 1; j < input.length; j++) {
      const next = input[j];

      if (!curr || !next) continue;
      if (curr + next == target) return curr * next;
    }
  }
  return -1;
}

/** find the first three entries that sum to @target and return product of the numbers */
function part2(input: number[], target: number) {
  for (let i = 0; i < input.length - 2; i++) {
    const a = input[i];
    for (let j = i + 1; j < input.length - 1; j++) {
      const b = input[j];
      for (let k = j; k < input.length; k++) {
        const c = input[k];

        if (!a || !b || !c) continue;
        if (a + b + c == target) return a * b * c;
      }
    }
  }
  return -1;
}

export function day1(input: string, target: number): [number, number] {
  const entries = parseInput(input);

  return [part1(entries, target), part2(entries, target)];
}

function parseInput(input: string): number[] {
  return input.split("\n").map((line) => +line);
}
