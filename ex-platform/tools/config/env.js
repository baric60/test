const path = require("path");

const ROOT = (module.exports.ROOT = path.join(process.cwd()));
module.exports.NODE_MODULES_PATH = path.resolve(ROOT, "node_modules");
module.exports.HOISTED_NODE_MODULES_PATH = path.resolve(
  ROOT,
  "../../node_modules"
);
