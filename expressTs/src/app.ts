import * as express from "express";
const app: express.Express = express();
const port: number = 8000;

// 라우터, api end point
app.get("/", (req, res) => {
  res.send({ name: "sojeong park", age: 31, friends: ["ss", "ys"] });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
