const nextBuildId = require("next-build-id");
module.exports = {
  trailingSlash: true,
  generateBuildId() {
    // NOTE: describe=true の場合、タグが付与されているとタグ、そうでなければ commit hash
    return nextBuildId({ dir: __dirname, describe: true });
  },
};
