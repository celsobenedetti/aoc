import { run } from "./lib/run";

import { day1 } from "./day1";
import { day2 } from "./day2";
import { day3 } from "./day3";
import { day4 } from "./day4";

const DEV = process.argv[2] == "--dev";
const input = `${DEV ? "test." : ""}input.txt`;

run(day1, `day1/${input}`);
run(day2, `day2/${input}`);
run(day3, `day3/${input}`);
run(day4, `day4/${input}`);
