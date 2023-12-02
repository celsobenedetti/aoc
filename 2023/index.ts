import { run } from "./lib/run";

import { day1 } from "./day1";
import { day2 } from "./day2";

const DEV = process.argv[2] == "--dev";
const input = `${DEV ? "test." : ""}input.txt`;

run(day1, `day1/${input}`);
run(day2, `day2/${input}`);
