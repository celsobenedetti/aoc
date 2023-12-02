export function day2(input: string) {
    return {
        day: 2,
        p1: part1(input),
        p2: part2(input),
    };
}

const RED = "red";
const BLUE = "blue";
const GREEN = "green";

function part1(input: string): number {
    const constraints = new Map([
        [RED, 12],
        [GREEN, 13],
        [BLUE, 14],
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

                    if (!max)
                        throw new Error(`Error trying to get color ${color}`);

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
    return input
        .split("\n")
        .filter((l) => !!l.length)
        .map((line) => {
            const [_, subgames] = line.split(":");

            const found = new Map([
                [RED, 0],
                [GREEN, 0],
                [BLUE, 0],
            ]);

            for (const subgame of subgames.split(";")) {
                for (const cube of subgame.split(",").map((s) => s.trim())) {
                    const [quantity, color] = cube.split(" ");

                    const max = found.get(color);

                    if (max == undefined)
                        throw new Error(`Error trying to get color ${color}`);

                    if (+quantity > max) {
                        found.set(color, +quantity);
                    }
                }
            }

            return [...found.values()].reduce((product, n) => product * n, 1);
        })
        .reduce((sum, id) => sum + id, 0);
}
