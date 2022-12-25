#!/usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";

import { extractCurrent, extractPath } from "./src/extractors.js";

const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));

async function depextract() {
  const rainbowTitle = chalkAnimation.rainbow(
    "depextract: Dependency extractor for package.json \n"
  );

  await sleep();
  rainbowTitle.stop();
}

async function handleOperation(selectedOperation) {
  if (selectedOperation === "current directory") {
    extractCurrent();
  } else {
    extractPath();
  }
}

async function selectOperation() {
  const selection = await inquirer.prompt({
    name: "operation",
    type: "list",
    message: "Select location of package.json\n",
    choices: [
      "current directory",
      "another directory (provide path in next step)",
    ],
  });

  handleOperation(selection.operation);
}

await depextract();
await selectOperation();
