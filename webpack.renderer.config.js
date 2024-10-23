const rules = require('./webpack.rules');

rules.push({
  test: /\.css$/,
  // include: [webpackPaths.srcRendererPath],
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, {loader: 'postcss-loader'}],
});

// rules.push({
//   test: /\.s?css$/,
//   use: [
//     ...
//     'postcss-loader'
//   ]
// })

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  }
};
