const { resolve, join } = require('path')

export default function() {
  this.addPlugin({
    src: resolve(__dirname, 'plugins/index.js'),
    fileName: join(namespace, 'plugins/index.js'),
  })
}
module.exports.meta = require('./package.json')
