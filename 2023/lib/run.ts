import { readFileToStr } from "./input";

type solution = (input: string) => { day: number; p1: number; p2: number };

export function run(day: solution, file: string) {
    const startTime = performance.now();
    const input = readFileToStr(file);

    console.log({
        ...day(input),
        time: (performance.now() - startTime).toFixed(3),
    });
}
