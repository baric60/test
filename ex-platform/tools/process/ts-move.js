const path = require("path");
const childProcess = require("../utils/child-process.utils");
const startSync = (src, dist) => {
  const srcFolder = path.relative(process.cwd(), src);
  const distFolder = path.relative(process.cwd(), dist);
  const args = [
    `-d=false`,
    `${srcFolder}/**/*`,
    `!${srcFolder}/**/*.{ts,tsx}`,
    `${distFolder}`
  ];

  return childProcess.spawnStreaming(
    `${require.resolve("sync-glob/bin/sync-glob")}`,
    "sync-glob",
    args
  );
};

exports.startSync = startSync;
