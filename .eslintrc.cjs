module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  globals: {
    chrome: true,
  },
  extends: [ 'eslint:recommended', 'plugin:react/recommended' ],
  overrides: [
    {
      env: { node: true },
      files: [ '.eslintrc.{js,cjs,jsx}' ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: [ 'react' ],
  rules: {
    'react/prop-types': 0,
    'no-debugger': 'off',
    'array-bracket-spacing': [ 'error', 'always' ],
    'block-spacing': [ 'error' ],
    'comma-dangle': [ 'error', 'always-multiline' ],
    'eol-last': [ 'error', 'always' ],
    indent: [ 'error', 2 ],
    'keyword-spacing': [
      'error',
      {
        before: true,
      },
    ],
    'newline-after-var': [ 'error', 'always' ],
    'no-multi-spaces': [ 'error' ],
    'no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
        destructuredArrayIgnorePattern: '[A-Z]',
        caughtErrors: 'none',
      },
    ],
    'object-curly-spacing': [ 'error', 'always' ],
    quotes: [ 'error', 'single' ],
    semi: [ 'error', 'always' ],
    'space-before-blocks': 'error',
    'space-infix-ops': 'error',
    'space-before-function-paren': [ 'error', 'always' ],
    'comma-spacing': 'error',
    'arrow-parens': [ 'error', 'as-needed' ],
  },
};
