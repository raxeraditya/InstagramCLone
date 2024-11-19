import express, { Request, Response, Application } from "express";
import dotenv from "dotenv";
import updateUserRoutes from "./routes/update.routes.js";
import userRoutes from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDb from "./Utils/db.js";

dotenv.config();
const port = process.env.PORT || 4000;
const app: Application = express();
app.use(cookieParser());

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "500kb" }));
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));

app.get("/", (req: Request, res: Response) => {
  res.send("hey");
});

app.use("/api/v1", userRoutes);
app.use("/api/v2", updateUserRoutes);

app.listen(port, () => {
  connectDb();
  console.log(`Example app listening on port ${port}`);
});
