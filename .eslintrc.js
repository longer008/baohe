module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      tex: true,
    },
  },
  env: {
    browser: true,
    node: true,
  },
  plugins: ['prettier', '@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
  ],
  // "ignorePatterns": ["node_modules/*"],
  rules: {
    // 复制的是element-plus 规则：https://github.com/element-plus/element-plus/blob/dev/.eslintrc.js#L26
    // js/ts
    'eol-last': 'error',
    'no-trailing-spaces': 'error',
    // 0 = off, 1 = warn, 2 = error
    'comma-style': ['warn', 'last'],
    'comma-dangle': ['off', 'always-multiline'],
    '@typescript-eslint/no-var-requires': 0, //允许require引入
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
    camelcase: ['error', { properties: 'never' }],
    semi: ['warn', 'never'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'object-curly-spacing': ['error', 'always'],
    'arrow-parens': ['error', 'as-needed'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: false,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: true,
        },
      },
    ],
    // vue  eslint-plugin-vue  https://eslint.vuejs.org/rules/html-self-closing.html
    'vue/no-v-html': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-self-closing': [
      'off',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
      },
    ],
    'vue/max-attributes-per-line': [
      'off',
      {
        singleline: 3,
        multiline: {
          max:1,
          allowFirstLine:true,
        },

      },
    ],
    'vue/require-default-prop': 'off',
    'vue/html-closing-bracket-spacing': 'error',
  },
}
