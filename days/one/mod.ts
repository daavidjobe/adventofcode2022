import { assertEquals } from "testing/asserts.ts";

interface Elf {
  calories: number;
  id: number;
}

type Result = [number, number];

export function solve(input: string): Result {
  const elves: Elf[] = input.split("\n\n").map((elf, idx) => {
    const calories = elf.split("\n").filter((s) => s.trim() !== "").map((
      s,
    ) => Number(s)).reduce((a, b) => a + b, 0);

    return {
      calories,
      id: idx + 1,
    };
  }).sort((a, b) => a.calories < b.calories ? 1 : -1);

  const [first, second, third] = elves;

  return [
    first.calories || 0,
    first.calories + second.calories + third.calories,
  ];
}

Deno.test("Day 1 example input", () => {
  const input = `
1000
2000
3000

4000

5000
6000

7000
8000
9000

10000
  `;
  assertEquals(solve(input), [24000, 45000]);
});
