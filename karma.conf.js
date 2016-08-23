const path = require('path')

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    files: [
      'src/*.ts',
      'test/*test.ts'
    ],
    exclude: [
    ],
    preprocessors: {
      'test/*test.ts': ['webpack'],
    },
    webpack: require('./webpack.config.js'),
    reporters: ['progress'],
    browsers: ['Firefox'],
    concurrency: Infinity
  })
}
