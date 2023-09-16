import { app } from "./core/config/express";
import "express-async-errors";
import api from "./api";
import { config } from "./utils/config";

app.use("/api", api);

app.listen(config.port, () =>
  console.log(
    `Server running on port ${config.port}\nhttp://localhost:${config.port}`
  )
);
