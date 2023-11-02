import express, { Request, Response, Application } from "express";
// const express= require("express")
require("./model/connect");
import dotenv from "dotenv";
import cors from "cors"

import eventRouter from "./routes/eventRoutes";
import userRouter from "./routes/userRoutes";
import ticketRouter from "./routes/ticketRoutes";

dotenv.config({ path: "./config.env" });
const port = 5000;
const app: Application = express();

app.use(express.json());
app.use(cors())

app.get("/", (req: any, res: any) => res.send("Hello World!"));
app.use("/event", eventRouter);
app.use("/auth", userRouter);
app.use("/ticket", ticketRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
