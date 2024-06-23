## Technologies - middleware - Packages :

- Express, Mongodb, Mongoose, Cors, dotenv, ts-node-dev, eslint, prettier, husky, lint stage.

## How I setup this project:

### Steps:

1. Initialize the file

```Javascript
Yarn init
```

2. Install Express, MongoDb, Mongoose, Cors, Dotenv, Jsonwebtoken

```
Yarn add express mongodb mongoose cors jsonwebtoken dotenv
```

3. Install typescript as a dependencies and Configuration file

```
yarn add --dev typescript

yarn tsc --init
```

4. Goto tsconfig.json file and press ctrl+f.
5. Then search "rootdir" and edit "./src", again search "outDir" and edit "./dist".
6. Create .env file for add secret data.

7. Create .gitignore file in the root folder and add this ignored files

```
node_modules
dist
.env
```

8. Create src folder and create server.ts and app.ts file under the src folder

9. Copy and paste this code in the app.ts file -

```
import express, { Application, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app

```

10. Copy and paste this code in the server.ts file -

```
import mongoose from "mongoose";
import app from "./app";
import config from "./config";

async function bootstrap() {
  try {
    await mongoose.connect(config.database as string);

    console.log("Database connected successfully");

    app.listen(config.port, () => {
      console.log(`Application listening on port ${config.port}`);
    });
  } catch (error) {
    console.log("Failed to connect databases", error);
  }
}

bootstrap();

```

11. Install express, cors declaration file -

```
yarn add --dev @types/express @types/cors
```

12. Create config folder under the server and create index.ts file

13. Write this code under the index.ts file -

```
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  database: process.env.DATABASE_URL,
};

```

14. Install ts-node-dev for run code on server.

```
yarn add ts-node-dev --dev
```

15. Add code run script "dev" in the script under the package.json file -

```
"dev": "ts-node-dev --respawn --transpile-only src/server.ts",
```

16. Run code on terminal using -

```
yarn dev
```

17. Add this two code on tsconfig.json file on the top of json -

```
"include": ["src"], // which files to compile
"exclude": ["node_modules"], // which files to skip
```

18. Install eslint, prettier -

```
yarn add eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --dev prettier
```

19. Install this code for - Avoid conflicts when working with ESLint and Prettier

```
yarn add --dev eslint-config-prettier
```

20. Create .eslintrc file and paste this code - (Change ecma version)

```
{
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
      "ecmaVersion": 13,
      "sourceType": "module",
    },
    "plugins": ["@typescript-eslint"],
    // HERE
    "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],

    "rules": {
        "no-unused-vars": "error",
        "no-console": "warn",
        "no-undef": "error",
        "no-unused-expressions" : "error",
        "no-unreachable": "error",
        "@typescript-eslint/consistent-type-definitions": ["error", "type"]
      },

    "env": {
      "browser": true,
      "es2021": true
    }
  }
```

21. Create .eslintignore file and paste this code -

```
node_modules
dist
.env
```

22. Create .prettierrc.json file and add this code -

```
{
  "semi": false,
  "singleQuote": true,
  "arrowParens": "avoid"
}
```

23. Create .vscode folder and make settings.json file

```
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
}
```

24. Install husky -

```
yarn add --dev husky
# Add pinst ONLY if your package is not private
yarn add --dev pinst
# Husky init
yarn husky init
```

25. Install Link stage

```
yarn add --dev lint-staged
```

26. Add this code any where in the package.json file

```
"lint-staged": {
  "src/**/*.ts": "yarn lint-prettier"
},
```

27. Add this code in .husky-> pre-commit file -
```
yarn lint-staged
```

28. Add this code in the script on under the package.json file

```
  "scripts": {
    "dev": "ts-node-dev --respawn --transpile-only src/server.ts",
    "start": "node dist/server.js",
    "build": "tsc",
    "lint:check": "eslint --ignore-path .eslintignore --ext .js,.ts .",
    "lint:fix": "eslint . --fic",
    "prettier:check": "prettier --ignore-path .gitignore --write \"**/*.+(js|ts|json)\"",
    "prettier:fix": "prettier --write .",
    "lint-prettier": "yarn lint:check && yarn prettier:check",
    "test": "echo \"Error: no test specified\" && exit 1",
    "prepare": "husky"
  },
```
