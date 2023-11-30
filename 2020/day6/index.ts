export function day6(input: string): [number, number] {
  const groups = parseInput(input);
  return [part1(groups), -1];
}

function parseInput(input: string): Set<string>[] {
  const groups: Set<string>[] = [];

  let newGroup = new Set<string>();
  for (const line of input.split("\n")) {
    if (!line.length) {
      groups.push(newGroup);
      newGroup = new Set();
      continue;
    }

    for (const char of line.split("")) {
      newGroup.add(char);
    }
  }
  groups.push(newGroup);

  return groups;
}

function part1(groups: Set<string>[]): number {
  return groups.reduce((sum, group) => {
    return sum + group.size;
  }, 0);
}
