module.exports = {
  root: true,

  env: {
    node: true
  },

  'extends': [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],

  parserOptions: {
    ecmaVersion: 2020
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'graphql/template-strings': [
      'error',
      {
        env: 'literal',
        projectName: 'app',
        schemaJsonFilepath: 'node_modules/.temp/graphql/schema.json'
      }
    ]
  },

  plugins: [
    'graphql'
  ]
}
