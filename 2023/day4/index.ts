export function day4(input: string) {
    return {
        day: 4,
        p1: part1(input),
        p2: part2(input),
    };
}

const DELIMITER = "|";
const CARD_DELIMITER = ":";

const splitTrim = (s: string, split: string) =>
    s.split(split).map((s) => s.trim());

function part1(input: string): number {
    return input
        .split("\n")
        .filter((l) => !!l.length)
        .reduce((sum, line) => {
            const [card, winningNumbersStr] = splitTrim(line, DELIMITER);
            const [_, playerNumbersStr] = splitTrim(card, CARD_DELIMITER);

            const winningNumbers = winningNumbersStr
                .split(" ")
                .filter((s) => !!s.length);

            let score = 0;
            for (const number of playerNumbersStr.split(" ")) {
                if (winningNumbers.some((n) => n === number)) {
                    if (score == 0) score++;
                    else score *= 2;
                }
            }

            return sum + score;
        }, 0);
}

function part2(input: string): number {
    const copies = new Map<number, number>();

    const addCopies = (index: number, n: number) => {
        let cardCopies = copies.get(index) || 0;
        cardCopies += n;
        copies.set(index, cardCopies);
        return cardCopies;
    };

    input
        .split("\n")
        .filter((l) => !!l.length)
        .forEach((line, i) => {
            const [card, winningNumbersStr] = splitTrim(line, DELIMITER);
            const [_, playerNumbersStr] = splitTrim(card, CARD_DELIMITER);

            const winningNumbers = winningNumbersStr
                .split(" ")
                .filter((s) => !!s.length);

            const cardCopies = addCopies(i, 1);

            let matches = 0;
            for (const number of playerNumbersStr.split(" ")) {
                if (winningNumbers.some((n) => n === number)) {
                    matches++;
                    addCopies(i + matches, cardCopies);
                }
            }
        }, 0);

    return [...copies.values()].reduce((sum, n) => sum + n, 0);
}
