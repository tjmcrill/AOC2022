export const part1 = (input: string) => {
  // distinquish the groups - split one group into 3 seperate groups
  // add calories of each group - go one by one for each group and add the calories
  // compare them and find the greatest - from that total. get the maximum

  return Math.max(
    ...input.split("\n\n").map((value) => value.split("\n")).map((v) =>
      v.reduce((prev, a) => prev + Number(a), 0)
    ),
  );
};

export const part2 = (input: string) => {
  return input.split("\n\n").map((value) => value.split("\n")).map((v) =>
    v.reduce((prev, a) => prev + Number(a), 0)
  ).sort((a, b) => b - a).splice(0, 3).reduce((prev, a) => prev + a, 0);
};

export const main = () => {
  const [file] = Deno.args;

  const input = Deno.readTextFileSync(file);

  console.log("part1", part1(input));
  console.log("part2", part2(input));
};

import.meta.main && main();
