const path = require('path');

module.exports = {
  entry : './src/app.tsx',
  output : {
    path : path.resolve(__dirname,'dist'),
    filename : 'bundle.js'
  },
  module : {
    rules :[
      {
        test: /\.css$/,
        use: ['style-loader',"css-loader"]
      },
      {
        test:/\.(js|jsx|ts|tsx)$/,
        use:"babel-loader",
        exclude:/node_modules/
      },
      {
        test:/\.(ts|tsx)$/,
        use:'ts-loader',
        exclude : /node_modules/
      }
    ]
  },
  resolve :{
    extensions : [".css",".js",".jsx",".ts",".tsx"]
  }
}