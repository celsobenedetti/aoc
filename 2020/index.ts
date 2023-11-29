import { day1 } from "./day1";
import { readFileToStr } from "./lib/input";

const day1_input = "./day1/input.txt";
const day1_target = 2020;

const [part1, _] = day1(readFileToStr(day1_input), day1_target);

console.log(part1);
