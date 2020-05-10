module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [[
    'module-resolver',
    {
      root: [
        '<rootDir>'
      ],
      alias: {
        '@api': './src/api/',
        '@component': './src/components/',
        '@view': './src/views/',
        '@module': './src/modules/',
        '@service': './src/services',
        '@http': './src/services/http',
        '@theme': './src/theme',
        '@style': './src/theme/styles.scss',
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
