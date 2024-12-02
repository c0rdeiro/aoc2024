import { readLists } from "../utils/readLists";

const getTotalDistance = (listA: number[], listB: number[]) => {
  const sortedListA = listA.sort((a, b) => a - b);
  const sortedListB = listB.sort((a, b) => a - b);
  let sum = 0;

  for (let i = 0; i < sortedListA.length; i++) {
    sum += Math.abs(sortedListA[i] - sortedListB[i]);
  }

  return sum;
};

const { col1List, col2List } = readLists("./src/day1/1.input");
console.log("total distance", getTotalDistance(col1List, col2List));
