/*
 * The input repeats itself indefinetely to the right
 *
 * 1. The trees could be stored as an matrix of booleans (less extensible)

..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#

**/

const TREE = "#";
type TreeGrid = boolean[][];

export function day3(input: string): [number, number] {
  const trees = parseInput(input);
  return [part1(trees), part2(trees)];
}

function parseInput(input: string): TreeGrid {
  return input.split("\n").map((line) => {
    return line.split("").map((char) => char == TREE);
  });
}

function part1(input: TreeGrid): number {
  let trees = 0;

  let j = 3;
  for (let i = 1; i < input.length; i++) {
    if (input[i][j]) trees++;

    j = (j + 3) % input[i].length;
  }
  return trees;
}

function part2(input: TreeGrid): number {
  return -1;
}
