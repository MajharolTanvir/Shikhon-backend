# How this project is setup:

## Steps:

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

9. Copy and paste this code in the app.ts file  -

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

10. Copy and paste this code in the server.ts file  -

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