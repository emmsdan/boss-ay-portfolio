module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: [
    '<rootDir>/**/__tests__/*.spec.{j,t}s?(x)',
    '<rootDir>/**/tests/unit/**/*.spec.{j,t}s?(x)'
  ],
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
  transformIgnorePatterns: ['<rootDir>/(node_modules)/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  snapshotSerializers: ['jest-serializer-vue']
}
