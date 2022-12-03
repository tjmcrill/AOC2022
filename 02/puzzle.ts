const CHOICES_OPPONENT = {
  A: "Rock",
  B: "Paper",
  C: "Scissors",
} as const;

const CHOICES_YOU = {
  X: "Rock",
  Y: "Paper",
  Z: "Scissors",
} as const;

const POINT_SHAPE = {
  "Rock": 1,
  "Paper": 2,
  "Scissors": 3,
} as const;

const STRAT = {
  X: "lose",
  Y: "draw",
  Z: "win",
} as const;

const STRAT_INDEX = {
  "lose": 1,
  "draw": -1,
  "win": 0,
} as const;

type YOU = "X" | "Y" | "Z";
type OPPONENT = "A" | "B" | "C";

// rock beats scissors, rock loses to paper, scissors beats paper, scissors loses to rock, paper beats rock, paper loses to scissors

// r > s , s > p, p > r

const outcomes = {
  "Rock": ["Paper", "Scissors"],
  "Scissors": ["Rock", "Paper"],
  "Paper": ["Scissors", "Rock"],
} as const;

export const part1 = (input: string) => {
  const s = input.split("\n").map((round) => {
    const opponent = round[0] as OPPONENT;
    const you = round[2] as YOU;

    const shapeScore = POINT_SHAPE[CHOICES_YOU[you]];
    const determineOutcome = (o: OPPONENT, y: YOU) => {
      const yourPlay = CHOICES_YOU[y];
      const opponentPlay = CHOICES_OPPONENT[o];

      if (yourPlay === opponentPlay) {
        return 3;
      }
      console.log(outcomes[yourPlay]);

      const score = outcomes[yourPlay].indexOf(opponentPlay) * 6;

      return score;
    };

    const outcomeScore = determineOutcome(opponent, you);

    return shapeScore + outcomeScore;
  });
  return s.reduce((p, a) => p + a, 0);
};

export const part2 = (input: string) => {
  const s = input.split("\n").map((round) => {
    const opponent = round[0] as OPPONENT;
    const you = round[2] as YOU;

    const outcome = STRAT[you];

    let outcomesScore = 0;

    if (outcome === "draw") outcomesScore = 3;
    if (outcome === "lose") outcomesScore = 0;
    if (outcome === "win") outcomesScore = 6;
    const determineShapeScore = (o: OPPONENT, y: YOU) => {
      const opponentPlay = CHOICES_OPPONENT[o];
      const strat = STRAT[y];

      const stratIndex = STRAT_INDEX[strat];

      const b = outcomes[opponentPlay];

      if (stratIndex === -1) {
        return POINT_SHAPE[opponentPlay];
      }

      const c = b[stratIndex];

      return POINT_SHAPE[c];
    };

    const shapeScore = determineShapeScore(opponent, you);

    return outcomesScore + shapeScore;
  });
  return s.reduce((p, a) => p + a, 0);
};

export const main = () => {
  const [file] = Deno.args;

  const input = Deno.readTextFileSync(file);

  // console.log("part1", part1(input));
  console.log("part2", part2(input));
};

import.meta.main && main();
