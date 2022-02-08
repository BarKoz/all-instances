import express from "express";
import "dotenv/config.js";
import router from "./routes/user.js";

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());
app.use(router);


app.listen(process.env.PORT, () =>
  console.log(`Server Up and running on: http://localhost:${process.env.PORT}`)
);