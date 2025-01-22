import cookieParser from "cookie-parser";
import cors from "cors";
import e from "express";
import { ORIGIN_URLS } from "./constants.js";
import errorHandler from "./middlewares/errorhandler.middleware.js";
import ApiError from "./utils/ApiError.js";
const app = e();

app.use(e.json({ limit: "16mb" }));
app.use(e.urlencoded({ extended: true, limit: "16mb" }));
app.use(e.static("public"));
app.use(cookieParser());
app.use(
  cors({
    origin: ORIGIN_URLS,
    credentials: true,
  })
);

import userRouter from "./routes/user.route.js";
app.use("/api/v1", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.all("*", (_, res) => {
  res.json(new ApiError(404, "fail", "Route not found", null));
});

app.use(errorHandler);

export default app;
