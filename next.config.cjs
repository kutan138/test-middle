// eslint-disable-next-line @typescript-eslint/no-require-imports
const nextBuildId = require("next-build-id");

const nextConfig = {
  generateBuildId: () => nextBuildId({ dir: __dirname, describe: true }),
};

export default nextConfig;
