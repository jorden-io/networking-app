import express from "express";
const app = express();
app.use(express.json());
(() => {
  app.use("secret", (res, req) => {
    req.send("dildo");
  });
  const PORT = 8080;
  app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  });
  app.use("/test", () => {
    console.log("hello");
  });
})();
