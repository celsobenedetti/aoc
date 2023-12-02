import { readFileToStr } from "./input";

type solution = (input: string) => { day: number; p1: number; p2: number };

export function run(fn: solution, file: string) {
    const startTime = performance.now();

    console.log({
        ...fn(readFileToStr(file)),
        time: (performance.now() - startTime).toFixed(3),
    });
}
