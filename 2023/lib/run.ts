import { readFileToStr } from "./input";

type solution = (input: string) => { day: number; p1: number; p2: number };

export function run(fn: solution, file: string) {
  console.log({
    ...fn(readFileToStr(file)),
  });
}
