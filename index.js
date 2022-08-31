#! /usr/bin/env node
import chalk from "chalk";

let log = console.log;
// Space
log();
const dim = chalk.dim;
const twitterClr = chalk.hex(`#1da1f2`).bold.inverse;
const githubClr = chalk.hex(`#6cc644`).bold.inverse;
const purple = chalk.hex(`#6937FF`).bold.inverse;

const c = chalk.hex(`#FF6633`).bold.inverse;
const ck12 = chalk.hex(`#99CC66`).bold.inverse;

const social = `
${twitterClr(` Twitter `)} ${dim(`https://twitter.com/_shelar_`)}
${githubClr(` GitHub `)}  ${dim(`https://github.com/iShelar`)}
${purple(` Blog `)}    ${dim(`https://saurhub.in`)}
`;

let hello = `Hi 👋! I'm ${purple("Saurabh Shelar")}`;

log(hello);

log(`
💻  I'm currently working as a ${"Software Engineer (React)"} at ${ck12(
  `CK-12 Foundation`
)}.
🌱  I’m interested in front-end development and open source.
👀  My hobbies are watching movies. Some of my favourites are Forest Gump, Lakshya, Social network.
💞️  I’m looking to collaborate on projects.
📫  You can reach me at: ${chalk.underline.bgBlue(
  `mr.saurabhshelar@gmail.com`
)}. I will reply asap, I promise!
`);

log(social);
