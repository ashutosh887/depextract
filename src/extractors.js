import chalk from "chalk";
import fs from "fs/promises";

async function readFile() {
  let data;
  try {
    data = await fs.readFile("./package.json", { encoding: "utf8" });
  } catch (err) {
    console.log(err);
    throw new Error("Unable to read package.json");
  }
  return JSON.parse(data);
}

export const extractCurrent = async () => {
  console.log("Current Directory is extracted in file...");
  const { dependencies } = await readFile();
  console.log(Object.keys(dependencies));
};

export const extractPath = () => {
  console.log(chalk.red("This feature is currently in progress..."));
};
