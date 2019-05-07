const path = require("path");
const { Command } = require("commander");
const { ROOT } = require("../config/env");
const { startSync } = require("../process/ts-move");
const { tsTransform } = require("../process/ts-transorm");
const program = new Command();

program.version(1.1);

program
  .command("build <src> <dist>")
  .option("-w, --watch", "start in watch mode")
  .action((src, dist) => {
    const SRC_PATH = path.join(ROOT, src);
    const DIST_PATH = path.join(ROOT, dist);
    const TSCONFIG_PATH = path.join(ROOT, "tsconfig.json");

    console.log(TSCONFIG_PATH);

    startSync(SRC_PATH, DIST_PATH);
    tsTransform(SRC_PATH, DIST_PATH, TSCONFIG_PATH);
  });

program.parse(process.argv);
