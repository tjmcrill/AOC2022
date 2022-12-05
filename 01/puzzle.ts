export const part1 = (input: string) => {
  const addedCaloriesArray = input.split("\n\n").map((value) => value.split("\n"));
  const sumArray = addedCaloriesArray.map((value) => 
    value.reduce((sum, current) => Number(sum)+ Number(current),0)
  )

  return Math.max(...sumArray);
};

export const part2 = (input: string) => {
  const addedCaloriesArray = input.split("\n\n").map((value) => value.split("\n"));
  const sumArray = addedCaloriesArray.map((value) => 
    value.reduce((sum, current) => Number(sum)+ Number(current),0)
  )

  const maxElf = Math.max(...sumArray);
  sumArray.splice(sumArray.indexOf(maxElf), 1)
  const secondElf = Math.max(...sumArray);
  sumArray.splice(sumArray.indexOf(secondElf), 1)
  const thirdElf = Math.max(...sumArray);
  sumArray.splice(sumArray.indexOf(thirdElf), 1)

  return maxElf + secondElf + thirdElf;

};

export const main = () => {
  const [file] = Deno.args;

  const input = Deno.readTextFileSync(file);

  console.log("part1", part1(input));
  console.log("part2", part2(input));
};

import.meta.main && main();
