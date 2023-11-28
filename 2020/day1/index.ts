/** find the two entries that sum to @target and return product of the numbers */
export function day1(input: number[], target: number) {
  for (let i = 0; i < input.length - 1; i++) {
    const curr = input[i];
    for (let j = i + 1; j < input.length; j++) {
      const next = input[j];

      if (!curr || !next) continue;
      if (curr + next == target) return curr * next;
    }
  }
  return -1;
}
