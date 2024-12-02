import fs from "fs";

export const readLists = (inputSrc: string) => {
  const data = fs.readFileSync(inputSrc, "utf-8");

  const lines = data.trim().split("\n"); // Remove extra whitespace and split by line

  const col1List: number[] = [];
  const col2List: number[] = [];

  lines.forEach((line) => {
    const [col1, col2] = line.split(/\s+/).map(Number); // Split and parse numbers
    col1List.push(col1);
    col2List.push(col2);
  });

  return { col1List, col2List };
};
