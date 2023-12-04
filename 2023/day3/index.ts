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
export function day3(input: string) {
    return {
        day: 3,
        p1: part1(input),
        p2: part2(input),
    };
}

const DIGIT = /\d+/;
const SYMBOL = /[^.\d]/;

function part1(input: string): number {
    let result = 0;

    const lines = input.split("\n").filter((l) => !!l.length);

    for (let i = 0; i < lines.length; i++) {
        const prev = lines.at(i - 1);
        const curr = lines[i];
        const next = lines.at(i + 1);

        result += processLine(prev, curr, next);
    }

    return result;
}

function part2(input: string): number {
    return -1;
}

function processLine(
    prev: string | undefined,
    curr: string,
    next: string | undefined,
): number {
    let sum = 0;

    const getNextNumber = () => curr.match(DIGIT)?.toString();
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

function checkAdjacentLine(
    line: string | undefined,
    start: number,
    end: number,
) {
    if (start > 0) start = start - 1;
    return line
        ?.substring(start, end + 2)
        .split("")
        .some((char) => char.match(SYMBOL));
}
