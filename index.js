import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
dotenv.config();
import Connection from "./database/db.js";
import Router from "./routes/route.js";
const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", Router);
 const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
Connection();
