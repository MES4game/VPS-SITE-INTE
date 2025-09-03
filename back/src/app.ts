import express from "express";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import SWAGGER_SPEC from "@/config/swagger";
import routes from "@/routes/index";

const app = express();

app.use(express.json());

// Extern Middlewares
app.use(helmet());
app.use(compression());
app.use(express.json({ limit: "10kb" }));
app.use(morgan("combined"));

app.use(cors({
    origin: process.env.NODE_ENV === "production" ? "https://inte.bde-pps.fr" : "https://dev.inte.bde-pps.fr"
}));

// Swagger docs
if (process.env.NODE_ENV !== "production") app.use("/docs", swaggerUi.serve, swaggerUi.setup(SWAGGER_SPEC));
else                                       app.get("/docs", (_req, res) => res.json(SWAGGER_SPEC));

// Routes
app.use("/", routes);
app.use("/api", swaggerUi.serve, swaggerUi.setup(SWAGGER_SPEC));

export default app;
