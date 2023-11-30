// maps question letter to number of responses in group
type GroupAnswers = Map<string, number>;

type Group = {
  answers: GroupAnswers;
  size: number;
};

function newGroup(): Group {
  return {
    answers: new Map(),
    size: 0,
  };
}

export function day6(input: string): [number, number] {
  const groups = parseInput(input);
  return [part1(groups), part2(groups)];
}

function parseInput(input: string): Group[] {
  const groups: Group[] = [];

  let currGroup = newGroup();

  for (const line of input.split("\n")) {
    if (!line.length) {
      groups.push(currGroup);
      currGroup = newGroup();
      continue;
    }

    currGroup.size++;

    for (const char of line.split("")) {
      const count = currGroup.answers.get(char);
      if (!count) {
        currGroup.answers.set(char, 1);
      } else {
        currGroup.answers.set(char, count + 1);
      }
    }
  }
  groups.push(currGroup);

  return groups;
}

function part1(groups: Group[]): number {
  return groups.reduce((sum, group) => {
    return sum + group.answers.size;
  }, 0);
}

function part2(groups: Group[]): number {
  const keepOnlyAnswersByEveryone = (group: Group): GroupAnswers => {
    const newGroup = new Map() as GroupAnswers;

    [...group.answers]
      .filter(([_, count]) => count == group.size)
      .forEach(([k, v]) => {
        newGroup.set(k, v);
      });
    return newGroup;
  };

  return groups.map(keepOnlyAnswersByEveryone).reduce((sum, group) => {
    return sum + group.size;
  }, 0);
}
