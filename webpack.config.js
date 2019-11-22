const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const distFolderName = 'dist';

module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, distFolderName + '/js/'),
  },
  devServer: {
    contentBase: path.resolve(__dirname, distFolderName),
    writeToDisk: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      { from: './src', to: path.resolve(__dirname, distFolderName), ignore: ['*.js'] },
    ]),
  ],
};