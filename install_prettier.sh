# Install Prettier and related dependencies
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier

#Create .prettierrc file and defined its preferences
# Create .prettierrc file and define its preferences
echo '{
    "singleQuote": true,
    "trailingComma": "all",
    "printWidth": 80,
    "tabWidth": 2,
    "semi": false
}' > .prettierrc

sudo rm -rf .eslintrc.json

echo '{
  "extends": [
    "next/core-web-vitals",
    "plugin:prettier/recommended"
  ]
}' > .eslintrc.json

echo '{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.formatOnSave": true
}' > .vscode/settings.json

npx prettier --write .

echo "Add npx prettier --write . to scripts in package.json"