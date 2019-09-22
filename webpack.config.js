module.exports = {
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|svg|gif)$/,
        loader: 'file-loader'
      }
    ]
  }
}