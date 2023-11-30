import { readFileToStr } from "./lib/input";

import { day1 } from "./day1";
import { day2 } from "./day2";
import { day3 } from "./day3";
import { day4 } from "./day4";
import { day5 } from "./day5";
import { day6 } from "./day6";

// const [d1_1, d1_2] = day1(readFileToStr("./day1/input.txt"), 2020);
// const [d2_1, d2_2] = day2(readFileToStr("./day2/input.txt"));
// const [d3_1, d3_2] = day3(readFileToStr("./day3/input.txt"));
// const [d4_1, d4_2] = day4(readFileToStr("./day4/input.txt"));
// const [d5_1, d5_2] = day5(readFileToStr("./day5/input.txt"));
const [d6_1, d6_2] = day6(readFileToStr("./day6/input.txt"));
//
// console.log({
//   day: 1,
//   part1: d1_1,
//   part2: d1_2,
// });
//
// console.log({
//   day: 2,
//   part1: d2_1,
//   part2: d2_2,
// });
//
// console.log({
//   day: 3,
//   part1: d3_1,
//   part2: d3_2,
// });
//
// console.log({
//   day: 4,
//   part1: d4_1,
//   part2: d4_2,
// });
//
// console.log({
//   day: 5,
//   part1: d5_1,
//   part2: d5_2,
// });
//
console.log({
  day: 6,
  part1: d6_1,
  part2: d6_2,
});
