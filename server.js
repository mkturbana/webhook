const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Webhook funcionando!");
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
