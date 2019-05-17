#!/usr/bin/env node
"use strict";

const { Command } = require("commander");
const path = require("path");
const ENV = require("../config/env.js");

require("babel-register")({
  ignore(file) {
    const filePath = path.resolve(file);

    return (
      filePath.startsWith(ENV.NODE_MODULES_PATH) ||
      filePath.startsWith(ENV.HOISTED_NODE_MODULES_PATH)
    );
  }
});

const program = new Command();

program.version(1.1);

program.command("* <script>").action(script => {
  console.log(script);
  require(`../scripts/${script}.js`);
});

program.parse(process.argv);
