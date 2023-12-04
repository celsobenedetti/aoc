import readline from "readline";

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const DIGIT = /\d+/;

// match anything that is not a digit or a period
const SYMBOL = /[^.\d]/;

reader.on("line", (line: string) => {
    const digit = line.match(SYMBOL);
    if (!digit) return;

    console.log(digit.toString());
});
