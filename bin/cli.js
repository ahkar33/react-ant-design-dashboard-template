#!/usr/bin/env node

import { execSync } from "child_process";

const runCommand = (command) => {
	try {
		execSync(`${command}`, { stdio: "inherit" });
	} catch (e) {
		console.error(`Failed to execute ${command}`, e);
		return false;
	}
	return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone -b npm-publish https://github.com/ahkar33/react-ant-design-dashboard-template.git ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Creating the project with name ${repoName}`);

const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(-1);

console.log(`Installing dependencies for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) process.exit(-1);

console.log(
	"Congratulations! You are ready. Follow the following commands to start"
);
console.log(`cd ${repoName} && npm run dev`);
