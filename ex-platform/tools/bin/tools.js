#!/usr/bin/env node
"use strict";

const { Command } = require("commander");

const program = new Command();

program.version(1.1);

program.command("* <script>").action(script => {
  console.log(script);
  require(`../scripts/${script}.js`);
});

program.parse(process.argv);
