const path = require('path')

module.exports = {
  webpack: config => {
    config.resolve = {
        alias: {
            ...config.resolve.alias,
            components: path.resolve(__dirname, 'components'),
            "@flare": path.resolve(__dirname, '/node_modules/@lkmx/flare-react/node_modules/@lkmx/flare/src'),
            "@flare-react": path.resolve(__dirname, 'node_modules/@lkmx/flare-react/components')
        }
    }
    return config
  }
}