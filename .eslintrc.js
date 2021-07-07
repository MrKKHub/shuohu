module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    // 'plugin:vue/vue3-essential',
    // '@vue/standard',
    // '@vue/typescript/recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {

    parser: 'babel-eslint',
    ecmaVersion: 6,
    // 'parser': '@typescript-eslint/parser',
    sourceType: 'module'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
      "vue/max-attributes-per-line": ["error", {
        "singleline": {
          "max": 99,
          "allowFirstLine": true
        },
        "multiline": {
          "max": 99,
          "allowFirstLine": true
        }
      }]
    },
    "vue/html-self-closing": ["error", {
      "html": {
          "void": "never",
          "normal": "any",
          "component": "any"
      },
      "svg": "always",
      "math": "always"
  }],
}
