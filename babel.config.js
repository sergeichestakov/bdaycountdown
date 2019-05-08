module.exports = function(api) {
  api.cache(true);
  return {
    presets: [['babel-preset-expo', { web: { allowCommonJS: true } }]],
    plugins: [
      [
        '@babel/plugin-transform-modules-commonjs',
        {
          allowTopLevelThis: true,
        },
      ],
    ],
  };
};
