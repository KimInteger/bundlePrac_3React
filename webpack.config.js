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
        ues: ["css-loader",'style-loader']
      },
      {
        test:/\.(js|jsx|ts|tsx)$/,
        use:"babel-loader",
        exclude:/node_modules/
      },
      {
        test:/\.(ts|tsx)$/,
        use:'ts-loader',
        excluder : /node_modules/
      }
    ]
  },
  resolve :{
    extensions : [".css",".js",".jsx",".ts",".tsx"]
  }
}