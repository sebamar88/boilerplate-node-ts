import "dotenv/config";
import express, { Request, Response, Express } from "express";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}!`);
});
