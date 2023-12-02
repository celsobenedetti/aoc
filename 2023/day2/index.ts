export function day2(input: string): { day: number; p1: number; p2: number } {
  return {
    day: 2,
    p1: part1(input),
    p2: part2(input),
  };
}

function part1(input: string): number {
  const constraints = new Map([
    ["red", 12],
    ["green", 13],
    ["blue", 14],
  ]);

  return input
    .split("\n")
    .filter((l) => !!l.length)
    .map((line) => {
      const [game, subgames] = line.split(":");
      const [_, id] = game.split(" ");

      for (const subgame of subgames.split(";")) {
        for (const cube of subgame.split(",").map((s) => s.trim())) {
          const [quantity, color] = cube.split(" ");
          const max = constraints.get(color);

          if (!max) throw new Error(`Error trying to get color ${color}`);

          if (+quantity > max) {
            return 0;
          }
        }
      }

      return +id;
    })
    .reduce((sum, id) => sum + id, 0);
}

function part2(input: string): number {
  return -1;
}
