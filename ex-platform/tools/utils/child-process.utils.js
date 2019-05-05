const chalk = require("chalk");
const execa = require("execa");
const logTransformer = require("strong-log-transformer");

function spawnStreaming(command, prefix, args, opts) {
  const options = Object.assign({}, opts);
  options.stdio = ["ignore", "pipe", "pipe"];

  const colorName = colorWheel[children % NUM_COLORS];
  const color = chalk[colorName];
  const spawned = _spawn(command, args, options);

  const prefixedStdout = logTransformer({ tag: `${color.bold(prefix)}:` });
  const prefixedStderr = logTransformer({
    tag: `${color(prefix)}:`,
    mergeMultiline: true
  });

  // Avoid "Possible EventEmitter memory leak detected" warning due to piped stdio
  if (children > process.stdout.listenerCount("close")) {
    process.stdout.setMaxListeners(children);
    process.stderr.setMaxListeners(children);
  }

  spawned.stdout.pipe(prefixedStdout).pipe(process.stdout);
  spawned.stderr.pipe(prefixedStderr).pipe(process.stderr);

  return spawned;
}

exports.spawnStreaming = spawnStreaming;

function _spawn(command, args, opts) {
  children += 1;

  const child = execa(command, args, opts);
  const drain = (code, signal) => {
    children -= 1;

    // don't run repeatedly if this is the error event
    if (signal === undefined) {
      child.removeListener("exit", drain);
    }
  };

  child.once("exit", drain);
  child.once("error", drain);

  return child;
}

let children = 0;

const colorWheel = ["cyan", "magenta", "blue", "yellow", "green", "red"];
const NUM_COLORS = colorWheel.length;
