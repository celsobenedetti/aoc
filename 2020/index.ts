import { readFileToStr } from "./lib/input";

import { day1 } from "./day1";
import { day2 } from "./day2";

const [d1_1, d1_2] = day1(readFileToStr("./day1/input.txt"), 2020);
const [d2_1, d2_2] = day2(readFileToStr("./day2/input.txt"));

console.log({
  day: "1",
  part1: d1_1,
  part2: d1_2,
});

console.log({
  day: "2",
  part1: d2_1,
  part2: d2_2,
});
