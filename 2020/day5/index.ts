/**
Input (Boarding Pass) represents binary space partitioning

For example, consider just the first seven characters of `FBFBBFFRLR`:

- Start by considering the whole range, rows `0` through `127`.
- `F` means to take the **lower half**, keeping rows `0` through `63`.
- `F` means to take the **lower half**, keeping rows `32` through `47`.
- `B` means to take the **upper half**, keeping rows `32` through `63`.
- `B` means to take the **upper half**, keeping rows `40` through `47`.
- `B` keeps rows `44` through `47`.
- `F` keeps rows `44` through `45`.
- The final `F` keeps the lower of the two, **row 44**.

1. Each input can be represented as a tuple of binary arrays
    - F == 1, B == 0
    - R == 1, L == 1
    - (bool[7], bool[3])
2. We can keep two int variables to represent the upper and lower bounds
    - let [upper,lower] = [0, 127]  // ROW
    - let [upper,lower] = [0, 7]  // COL

*/

type B = boolean;
type BoardingRow = [B, B, B, B, B, B, B];
type BoardingCol = [B, B, B];

/** Tuple of boolean arrays representing a boarding pass */
type BoardingPass = [BoardingRow, BoardingCol];

const FRONT = "F";
const LEFT = "L";
const UNIQUE_SEAT_MULTIPLIER = 8;

export function day5(input: string): [number, number] {
  const passes = parseInput(input);
  return [part1(passes), part2(passes)];
}

export function parseInput(input: string): BoardingPass[] {
  return input
    .split("\n")
    .filter((line) => !!line.length)
    .map((line) => {
      const row = line
        .substring(0, 7)
        .split("")
        .map((c) => c == FRONT) as BoardingRow;

      const col = line
        .substring(7)
        .split("")
        .map((c) => c == LEFT) as BoardingCol;

      if (row.length != 7 || col.length != 3) {
        throw new Error(`Invalid input line ${line}`);
      }

      return [row, col];
    });
}

export function binaryPartitionSearch(arr: boolean[]) {
  let upper = Math.pow(2, arr.length) - 1;
  let lower = 0;

  for (let i = 0; i < arr.length; i++) {
    const bool = arr[i];
    const newBound = lower + Math.floor((upper - lower) / 2);

    if (bool) {
      upper = newBound;
    } else {
      lower = newBound;
    }
  }
  return upper;
}

function processPassID(boardingPass: BoardingPass): number {
  const boardingRow = boardingPass[0];
  const boardingCol = boardingPass[1];

  const row = binaryPartitionSearch(boardingRow);
  const col = binaryPartitionSearch(boardingCol);

  return col + row * UNIQUE_SEAT_MULTIPLIER;
}

function part1(passes: BoardingPass[]): number {
  return Math.max(...passes.map(processPassID));
}

function part2(passes: BoardingPass[]): number {
  return (
    (passes
      .map(processPassID)
      .sort((a, b) => a - b)
      .find((_, i, ids) => ids[i] + 1 != ids[i + 1]) || -1) + 1
  );
}
