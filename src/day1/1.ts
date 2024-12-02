import fs from "fs";

const getTotalDistance = (listA: number[], listB: number[]) => {
  const sortedListA = listA.sort((a, b) => a - b);
  const sortedListB = listB.sort((a, b) => a - b);
  let sum = 0;

  for (let i = 0; i < sortedListA.length; i++) {
    sum += Math.abs(sortedListA[i] - sortedListB[i]);
  }

  return sum;
};

try {
  const data = fs.readFileSync("./src/day1/1.input", "utf-8");

  const lines = data.trim().split("\n"); // Remove extra whitespace and split by line

  const col1List: number[] = [];
  const col2List: number[] = [];

  lines.forEach((line) => {
    const [col1, col2] = line.split(/\s+/).map(Number); // Split and parse numbers
    col1List.push(col1);
    col2List.push(col2);
  });

  console.log(getTotalDistance(col1List, col2List));
} catch (error) {
  console.error("Error reading the file:", error);
}
