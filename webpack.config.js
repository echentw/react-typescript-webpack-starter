const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
  mode: 'development',
  // mode: 'production',
  devtool: 'source-map',
  entry: {
    main: path.join(__dirname, 'src/index.tsx'),
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg|woff2?|eot|ttf)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      }
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'src/index.html', to: 'index.html', toType: 'file', force: true },
      ]
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".scss"],
    modules: [
      path.resolve('./node_modules'),
    ],
  },
};
