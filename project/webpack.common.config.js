const HtmlWebpakPlugin = require("html-webpack-plugin"); 

module.exports = (env)=>{
    return {
      entry: {
        "bundle": ["./src/index.tsx"],
        "main": ["./src/main.tsx"]
      },
      output: {
        filename: "[name].js",
        path: __dirname + "/dist"
      },
    
      
        devtool: "source-map",
      
        resolve: {
          extensions: [".ts", ".tsx", ".js", ".json"]
        },
      
        module: {
          rules: [
            { test: /\.tsx?$/, loader: "ts-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
          ]
        },
      
        plugins: [
          new HtmlWebpakPlugin({
            template:"./src/index.html",
            filename: './index.html', // 输出文件【注意：这里的根路径是module.exports.output.path】
            showErrors: true,
            inject: 'body',
            chunks: ["bundle"]
          })
        ],
        target: "electron-renderer"
      };
};