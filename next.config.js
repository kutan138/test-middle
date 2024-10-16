module.exports = {
  trailingSlash: true,
  generateBuildId() {
    // NOTE: describe=true の場合、タグが付与されているとタグ、そうでなければ commit hash
    return "release/test1";
  },
};
