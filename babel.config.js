module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [[
    'module-resolver',
    {
      root: [
        './'
      ],
      alias: {
        '@api': './src/api/',
        '@component': './src/component/',
        '@view': './src/views/',
        '@module': './src/modules/',
        '@service': './src/services',
        '@http': './src/services/http',
        '@theme': './src/theme',
        '@assets': './src/assets',
        '@svg': './src/assets/svg',
        '@img': './src/assets/img',
        '@logo': './src/assets/img/logo.png',
        '@utils': './src/utils',
        '@settings': './src/settings.json',
        '@root': './src'
      }
    }
  ]]
}
