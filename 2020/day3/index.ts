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
  return findsTreeInSlope(input, 3, 1);
}

function part2(input: TreeGrid): number {
  return (
    findsTreeInSlope(input, 1, 1) *
    findsTreeInSlope(input, 3, 1) *
    findsTreeInSlope(input, 5, 1) *
    findsTreeInSlope(input, 7, 1) *
    findsTreeInSlope(input, 1, 2)
  );
}

function findsTreeInSlope(
  input: TreeGrid,
  slopeX: number,
  slopeY: number,
): number {
  let trees = 0;

  let j = slopeX;
  for (let i = slopeY; i < input.length; i += slopeY) {
    if (input[i][j]) trees++;

    j = (j + slopeX) % input[i].length;
  }
  return trees;
}
