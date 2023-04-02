// vue cli 或 vite
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 375,
      selectBlackList: ["favor"]
    }
  }
};
