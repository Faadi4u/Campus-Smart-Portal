import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import {healthRoutes}  from "./routes/health.routes.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();

app.use(cors({origin : process.env.CORS_ORIGIN}));

app.use(express.json({limit: "16kb"}));

app.use(express.urlencoded({extended:true , limit: "16kb"}));

app.use(cookieParser());

app.use("/api/v1" , healthRoutes)

//Error Hnadler Middleware
app.use(errorHandler);

export {app}