const { spawnStreaming } = require("../utils/child-process.utils");

const onTscExit = shouldFailOnError => code => {
  if (code > 0 && shouldFailOnError) {
    process.exitCode = 1;
  }
};

const tsTransform = (src, dist, tsconfig, isWatch, shouldFailOnError) => {
  const args = ["-p", tsconfig, "--outDir", dist];

  if (isWatch) {
    args.push("-w");
  } else {
    args.push("--diagnostics");
  }

  return spawnStreaming(
    `${require.resolve("typescript/bin/tsc")}`,
    "tsc",
    args
  ).on("exit", onTscExit(shouldFailOnError));
};

exports.tsTransform = tsTransform;
