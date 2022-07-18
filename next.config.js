const path = require('path')

module.exports = {
  webpack: config => {
    config.resolve = {
        alias: {
            ...config.resolve.alias,
            components: path.resolve(__dirname, 'components'),
            "@flare": path.resolve(__dirname, '/node_modules/@lkmx/flare/src'),
            "~": path.resolve(__dirname, '/node_modules'),
            "@flare-react": path.resolve(__dirname, 'node_modules/@lkmx/flare-react/components')
        }
    }
    return config
  }
}