export const part1 = (input: string) => {
  const line = input.split("\n");

  const a = line.filter((groups) => {
    const [g1, g2] = groups.split(",").map((g) => g.split("-").map(Number));

    const [lowestStartGroup, highestGroupStart] = g1[0] < g2[0]
      ? [g1, g2]
      : [g2, g1];

    if (
      highestGroupStart[1] > lowestStartGroup[1] &&
      highestGroupStart[0] !== lowestStartGroup[0]
    ) {
      return false;
    }

    return true;
  });

  return a.length;
};

export const part2 = (input: string) => {
  const line = input.split("\n");

  const a = line.filter((groups) => {
    const [g1, g2] = groups.split(",").map((g) => g.split("-").map(Number));

    const [lowestStartGroup, highestGroupStart] = g1[0] < g2[0]
      ? [g1, g2]
      : [g2, g1];

    if (
      highestGroupStart[0] > lowestStartGroup[1] &&
      highestGroupStart[0] !== lowestStartGroup[0]
    ) {
      return false;
    }

    return true;
  });

  return a.length;
};

export const main = () => {
  const [file] = Deno.args;

  const input = Deno.readTextFileSync(file);

  console.log("part1", part1(input));
  console.log("part2", part2(input));
};

import.meta.main && main();
