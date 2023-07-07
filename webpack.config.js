const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    greeting: './src/scripts/greeting.js',
    menu: './src/scripts/menu.js',
    contact: './src/scripts/contact.js',
  },
  output: {
    filename: '[name].main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },

};
