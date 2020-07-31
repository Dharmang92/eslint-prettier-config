# ESlint - Prettier - Config (Airbnb)

npm init -y <br>
npm i -D eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-node eslint-config-node <br>
npx install-peerdeps --dev eslint-config-airbnb

```json
.eslintrc.json file
{
"extends": ["airbnb", "prettier"],
"plugins": ["prettier"],
"rules": {
"no-unused-vars": "warn",
"func-names": "off",
"no-console": "off",
"prettier/prettier": "error"
}
}
```

```json
.prettierrc file
{
"tabWidth": 4
}
```

```json
Common prettier config (not using)
{
"printWidth": 80,
"tabWidth": 4,
"useTabs": false,
"semi": true,
"singleQuote": true,
"jsxSingleQuote": false,
"trailingComma": "all",
"bracketSpacing": true,
"jsxBracketSameLine": false,
"arrowParens": "avoid",
"requirePragma": true,
"insertPragma": true,
"endOfLine": "lf"
}
```
