const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = options => {
  return {
    entry: './index.js',
    output: {
      filename: 'bundle.js',
      publicPath: "auto",
      uniqueName: "mfe4"
    },
    module: {
      rules: [
        {
          test: /.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                presets: ['@babel/react', '@babel/env']
              }
            },
          ],
        },
      ],
    },
    plugins: [
      new ModuleFederationPlugin({
        
          // For remotes (please adjust)
          name: "react660394d5be361e17e019bbb9249bcf98d31e4b51998f6f02cfe95271",
          library: { type: "var", name: "react660394d5be361e17e019bbb9249bcf98d31e4b51998f6f02cfe95271" },
          filename: "remoteEntry.js", // <-- Meta Data
          exposes: {
              './react660394d5be361e17e019bbb9249bcf98d31e4b51998f6f02cfe95271': './app.js',
          },        
          shared: ["react", "react-dom"]
        }),
        new CopyWebpackPlugin({
          patterns: [
            {
              from: './*.html'
            }
          ]
        })
    ],
    devServer: {
      port: 4204
    }
  }
}
