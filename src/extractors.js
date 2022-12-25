import os from "os";
import fs from "fs/promises";
import chalk from "chalk";
import inquirer from "inquirer";

import { packageManagers } from "./constants/index.js";

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

async function selectPackageManager() {
  const selection = await inquirer.prompt({
    name: "manager",
    type: "list",
    message: "Select location of package.json\n",
    choices: Object.keys(packageManagers),
  });
  return selection.manager;
}

export const extractCurrent = async () => {
  const { dependencies, devDependencies } = await readFile();

  const manager = await selectPackageManager();

  if (dependencies != undefined) {
    let prodScript = `${manager} ${packageManagers[manager]} ${Object.keys(
      dependencies
    ).join(" ")} ${os.EOL}`;

    await fs.writeFile("scripts.sh", prodScript, (error) => {
      if (error) {
        throw new Error("Can't write to file");
      }
    });

    console.log(chalk.green("Production script generation: Successful ✅"));
  } else {
    console.log(chalk.red("No dependency found: ❌"));
  }

  if (devDependencies !== undefined) {
    let devScript = `${manager} ${packageManagers[manager]} ${Object.keys(
      devDependencies
    ).join(" ")} --save-dev ${os.EOL}`;

    await fs.appendFile("scripts.sh", devScript, (error) => {
      if (error) {
        throw new Error("Can't write to file");
      }
    });
    console.log(chalk.green("Development script generation: Successful ✅"));
  } else {
    console.log(chalk.red("No devDependency found: ❌"));
  }
};

export const extractPath = () => {
  console.log(chalk.red("This feature is currently in progress..."));
};
