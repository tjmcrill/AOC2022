const p = (s: string) => parseInt(s, 10);
export const part1 = (input: string) => {
  const line = input.split("\n");

  const a = line.filter((groups) => {
    const [g1, g2] = groups.split(",");

    const g1Numbers = g1.split("-");
    const g2Numbers = g2.split("-");

    const [lowestStartGroup, highestGroupStart] =
      p(g1Numbers[0]) < p(g2Numbers[0])
        ? [g1Numbers, g2Numbers]
        : [g2Numbers, g1Numbers];

    if (
      p(highestGroupStart[1]) > p(lowestStartGroup[1]) &&
      p(highestGroupStart[0]) !== p(lowestStartGroup[0])
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
    const [g1, g2] = groups.split(",");

    const g1Numbers = g1.split("-");
    const g2Numbers = g2.split("-");

    const [lowestStartGroup, highestGroupStart] =
      p(g1Numbers[0]) < p(g2Numbers[0])
        ? [g1Numbers, g2Numbers]
        : [g2Numbers, g1Numbers];

    if (
      p(highestGroupStart[0]) > p(lowestStartGroup[1]) &&
      p(highestGroupStart[0]) !== p(lowestStartGroup[0])
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
