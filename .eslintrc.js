module.exports = {
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  settings: {
    react: { version: 'detect' },
  },
  rules: {
    "@typescript-eslint/no-empty-interface": [
      "error",
      {
        "allowSingleExtends": true
      }
    ],
    '@typescript-eslint/quotes': ['warn', 'single'],
    '@typescript-eslint/semi': ['warn', 'never'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/object-curly-spacing': [1, 'always'],
    'object-curly-spacing': [1, 'always'],
    'no-useless-catch': 'off',
    'no-case-declarations': 'off',
    'react/jsx-curly-spacing': ['warn', { when: 'never' }],
    'react/jsx-props-no-multi-spaces': 'warn',
    'react/jsx-equals-spacing': ['warn', 'never'],
    'jsx-quotes': ['warn', 'prefer-single'],
    'react/no-children-prop': 'off',
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'warn',
    'react/display-name': 'warn',
    'react/jsx-key': 'warn',
    'prefer-const': 'warn',
    'no-empty': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
}
