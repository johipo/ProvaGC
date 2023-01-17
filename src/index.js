import express from "express";
import router from "./router/router.js";
import dotenv from "dotenv"

const app = express();
dotenv.config()
const PORT = process.env.PORT || 3333

app.use(router);

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
})
