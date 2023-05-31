const process = require('process')

module.exports = function (api) {
  api.cache(true)

  const presets = [
    '@babel/preset-env'
  ]
  const plugins = [
  ]
  const env = {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: 'commonjs'
          }
        ]
      ]
    }
  }

  return {
    presets,
    plugins,
    env
  }
}
