export const part1 = (input: string) => {
  return input.split("\n").map((v) => {
    const h1 = v.slice(0, v.length / 2);
    const h2 = v.slice(v.length / 2, v.length);

    return h1.split("").filter((f) =>
      h2.split("").findIndex((e) => e === f) !== -1
    );
  }).reduce((p, a) => {
    const letter = a[0].charCodeAt(0);
    let minus = 96;
    if (letter > 64 && letter < 91) minus = 38;
    return letter - minus + p;
  }, 0);
};

export const part2 = (input: string) => {
  const line = input.split("\n");

  const groups = [];
  for (let i = 0; i < line.length; i += 3) {
    groups.push(line.slice(i, i + 3));
  }

  const same = groups.map((g) => {
    return g.reduce(
      (p, _a) => {
        return _a.split("").filter((f) =>
          p.split("").findIndex((i) => i === f) !== -1
        ).toString();
      },
    )[0];
  }).reduce((x, y) => {
    let letter = y[0].charCodeAt(0);

    letter = (letter > 64 && letter < 91) ? letter - 38 : letter - 96;

    return letter + x;
  }, 0);

  return same;
};

export const main = () => {
  const [file] = Deno.args;

  const input = Deno.readTextFileSync(file);

  console.log("part1", part1(input));
  console.log("part2", part2(input));
};

import.meta.main && main();
