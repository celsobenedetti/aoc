export function day3(input: string) {
    return {
        day: 3,
        p1: part1(input),
        p2: part2(input),
    };
}

type NeighborLine = string | undefined;

const DIGIT = /\d/;
const DIGITS = /\d+/;
const SYMBOL = /[^.\d]/;
const GEAR = /\*/;
const NIL = -1;

/**
Given any line L, the program needs context of the previous and next lines adjacent to L

Processing a line:
    1. We match the first number of the line through RegExp
    2. With that we find `start` and `end` index of the number
    3. We then check if the number has adjacent `symbols`. If so, add it to result.
        1. Check `start-1` and `end+1`
        2. For both `L-1` and `L+1`, check through `start-1..end+1`
    4. Repeat from step 1 until we don't find a new number
*/
function part1(input: string): number {
    let result = 0;

    const lines = input.split("\n").filter((l) => !!l.length);

    for (let i = 0; i < lines.length; i++) {
        const prev = lines.at(i - 1);
        const curr = lines[i];
        const next = lines.at(i + 1);

        result += processLinePart1(prev, curr, next);
    }

    return result;
}

function processLinePart1(
    prev: NeighborLine,
    curr: string,
    next: NeighborLine,
): number {
    const getNextNumber = () => curr.match(DIGITS)?.toString();

    let sum = 0;
    let number = getNextNumber();

    while (number != undefined) {
        const start = curr.indexOf(number);
        const end = start + number.length - 1;

        const isSymbolBeforeStart = curr.at(start - 1)?.match(SYMBOL);
        const isSymbolAfterEnd = curr.at(end + 1)?.match(SYMBOL);

        if (
            isSymbolBeforeStart ||
            isSymbolAfterEnd ||
            checkAdjacentLine(prev, start, end) ||
            checkAdjacentLine(next, start, end)
        ) {
            sum += +number;
        }

        prev = prev?.substring(end + 1);
        curr = curr.substring(end + 1);
        next = next?.substring(end + 1);
        number = getNextNumber();
    }

    return sum;
}

function checkAdjacentLine(line: NeighborLine, start: number, end: number) {
    if (start > 0) start = start - 1;
    return line
        ?.substring(start, end + 2)
        .split("")
        .some((char) => char.match(SYMBOL));
}

/*
Given any line L, the program needs context of the previous and next lines adjacent to L

Processing a line:
    1. We match the first `gear` of the line through RegExp
    2. For each of it's 8 neighbors, we check for numbers using getNumberAtIndex
    - Each number is added to a `set`
    - If the set has exactly 2 members, the gear is valid
        - Add the product of the numbers to result
    3. Repeat from step 1 until we don't find more gears
 */
function part2(input: string): number {
    let result = 0;

    const lines = input.split("\n").filter((l) => !!l.length);

    for (let i = 0; i < lines.length; i++) {
        const prev = lines.at(i - 1);
        const curr = lines[i];
        const next = lines.at(i + 1);

        result += processLinePart2(prev, curr, next);
    }

    return result;
}

function processLinePart2(
    prev: NeighborLine,
    curr: string,
    next: NeighborLine,
): number {
    const getNextGear = () => curr.match(GEAR)?.toString();

    let sum = 0;
    let gear = getNextGear();

    while (gear != undefined) {
        const i = curr.indexOf(gear);
        const neighbors = new Set<number>();

        // Check all eight neighbors
        neighbors.add(getNumberAtIndex(i - 1, prev));
        neighbors.add(getNumberAtIndex(i, prev));
        neighbors.add(getNumberAtIndex(i + 1, prev));
        neighbors.add(getNumberAtIndex(i - 1, curr));
        neighbors.add(getNumberAtIndex(i + 1, curr));
        neighbors.add(getNumberAtIndex(i - 1, next));
        neighbors.add(getNumberAtIndex(i, next));
        neighbors.add(getNumberAtIndex(i + 1, next));

        neighbors.delete(NIL);

        if (neighbors.size == 2) {
            sum += [...neighbors].reduce((product, n) => product * n, 1);
        }

        prev = prev?.substring(i + 1);
        curr = curr.substring(i + 1);
        next = next?.substring(i + 1);
        gear = getNextGear();
    }

    return sum;
}

export function getNumberAtIndex(index: number, line: NeighborLine): number {
    let result = line?.at(index)?.match(DIGIT)?.toString();
    if (!line || result == undefined) {
        return NIL;
    }

    for (let i = index + 1; line.at(i)?.match(DIGIT) != undefined; i++) {
        result += line[i];
    }

    for (let i = index - 1; line.at(i)?.match(DIGIT) != undefined; i--) {
        result = line[i] + result;
    }

    return +result;
}
