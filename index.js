#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";

import { extractCurrent, extractPath } from "./src/extractors.js";

let operation;

const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow(
    "depextract: Dependency extractor for package.json \n"
  );

  await sleep();
  rainbowTitle.stop();
}

async function handleOperation(selectedOperation) {
  if (selectedOperation === "Current Directory") {
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
      "Current Directory",
      "Another Directory (provide path in next step)",
    ],
  });

  return handleOperation(selection.operation);
}

await welcome();
await selectOperation();
