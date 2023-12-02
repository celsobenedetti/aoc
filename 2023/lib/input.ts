import { readFileSync } from "fs";

export function readFileToStr(path: string): string {
    return readFileSync(path).toString("utf8");
}
