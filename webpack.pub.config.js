const path = require('path');
 
module.exports = {
  context: path.join(__dirname, 'src'),
  mode: 'production',
  entry: [
    './main.js',
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.json', '.scss'],
    modules: [
      path.join(process.cwd(), 'client'),
      path.join(process.cwd(), 'node_modules'),
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          "babel-loader"
        ],
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.(png|woff|woff2|eot|ttf|svg|gif)$/, loader: 'url-loader?limit=100000' }
    ],
  },
};