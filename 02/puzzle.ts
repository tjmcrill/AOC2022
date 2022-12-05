const score = (opponent: string, me: string): number => {
  if(me === "X") {
    if(opponent === "A") return 4;
    else if(opponent === "B") return 1;
    else return 7;
  } else if (me === "Y") {
    if(opponent === "A") return 8;
    else if(opponent === "B") return 5;
    else return 2;
  } else {
    if(opponent === "A") return 3;
    else if(opponent === "B") return 9;
    else return 6;
  }
}

const scorePt2 = (opponent: string, me: string): number => {
  if(opponent === "A") {
    if(me === "X") return 3;
    else if(me === "Y") return 4;
    else return 8;
  } else if (opponent === "B") {
    if(me === "X") return 1;
    else if(me === "Y") return 5;
    else return 9;
  } else {
    if(me === "X") return 2;
    else if(me === "Y") return 6;
    else return 7;
  }
}

export const part1 = (input: string) => {
  let totalScore = 0;

  input.split("\n").map((val) => val.split(" ")).forEach((inputs) => {
    totalScore+= score(inputs[0], inputs[1])
  })
  
  return totalScore;
};

export const part2 = (input: string) => {
  let totalScore = 0;

  input.split("\n").map((val) => val.split(" ")).forEach((inputs) => {
    totalScore+= scorePt2(inputs[0], inputs[1])
  })
  
  return totalScore;
};

export const main = () => {
  const [file] = Deno.args;

  const input = Deno.readTextFileSync(file);

  console.log("part1", part1(input));
  console.log("part2", part2(input));
};

import.meta.main && main();
