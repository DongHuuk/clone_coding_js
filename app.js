import express from "express";
import logger from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./router";

const app = express();

const handleHome = (req, res) => res.send('Hello from Home');

const handleProfile = (req, res) => res.send("You ard on my profile");


app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(helmet());
app.use(logger("dev"))

app.get("/", handleHome)
app.get("/profile", handleProfile);

app.use("/user", userRouter);

export default app;