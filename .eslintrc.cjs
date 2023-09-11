module.exports = {
  root: true,
  env: { browser: true, es2020: true , node: true},
  extends: [
  
  ],
  parser: "babel-eslint",
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
  
  },
}
