const express = require("express");
const postRouter = require("./routes/post");
const app = express();

app.get("/", (req, res) => {
  res.send("hello express ");
});

app.get("/api", (req, res) => {
  res.send("hello express server api");
});

app.use("/post", postRouter);

app.listen(3065, () => {
  console.log("서버 실행 중");
});
