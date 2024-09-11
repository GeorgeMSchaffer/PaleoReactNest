const react = require('eslint-plugin-react');
const globals = require('globals');

module.exports = [
  {
    extends: ['plugin:react/recommended','plugin:react-hooks/recommended','eslint:recommended',],
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
        plugins: {
    react,
  },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
      ...globals.browser,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // ... any rules you want
      'no-unused-vars': 'info',
      'react/jsx-uses-react': 'error',
          'react/jsx-uses-vars': 'error',
    },
    // ... others are omitted for brevity
  }
];