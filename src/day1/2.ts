import { readLists } from "../utils/readLists";

const getSimilarityScore = (listA: number[], listB: number[]) => {
  const frequencyLeftList: Map<number, number> = new Map();

  listB.forEach((n) =>
    frequencyLeftList.set(n, 1 + (frequencyLeftList.get(n) ?? 0))
  );

  let out = 0;
  listA.forEach((n) => (out += n * (frequencyLeftList.get(n) ?? 0)));

  return out;
};

const { col1List, col2List } = readLists("./src/day1/1.input");

console.log("Similarity score", getSimilarityScore(col1List, col2List));
