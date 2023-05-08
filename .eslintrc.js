module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    'eslint:recommended',
    'plugin:vue/essential',
  ],
  rules: {
    // override/add rules settings here, such as:
    'no-unused-vars': 'off',
    'no-console': 'off',
    'no-undef': 'off',
    'no-empty': 'off',
    'no-prototype-builtins': 'off',
    'no-useless-escape': 'off',
    'no-constant-condition': 'off',
    'no-async-promise-executor': 'off',
    'import/no-unresolved': 'off',
    'import/no-webpack-loader-syntax': 'off',
    'unexpected-character-in-attribute-name': 'off',
    'vue/no-unused-components': 'off',
    'vue/no-unused-vars': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-v-html': 'off',
  }
}
