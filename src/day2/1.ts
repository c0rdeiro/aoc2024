import fs from "fs";

//out: return 1 if safe, 0 if unsafe
const checkReportSafety = (arr: number[]): number => {
  let auxTrend = undefined;
  for (let i = 0; i < arr.length - 1; i++) {
    let aux1 = arr[i];
    let aux2 = arr[i + 1];
    const absDiff = Math.abs(aux1 - aux2);
    const trend = aux1 - aux2 < 0 ? "up" : "down";
    if (absDiff < 1 || absDiff > 3 || (i !== 0 && auxTrend !== trend)) {
      return 0;
    }
    auxTrend = trend;
  }
  return 1;
};

const checkTotalSafety = (inputSrc: string) => {
  const data = fs.readFileSync(inputSrc, "utf-8");

  const linesRaw = data.trim().split("\r\n"); // Remove extra whitespace and split by line
  const lines = linesRaw.map((line) => line.split(" ").map(Number));

  const sum = lines
    .map((line) => checkReportSafety(line))
    .reduce((sum, curr) => sum + curr, 0);
  return sum;
};

const sum = checkTotalSafety("./src/day2/1.input");
console.log(sum);
