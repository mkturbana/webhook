const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Rota para validar o webhook do Facebook
app.get("/webhook", (req, res) => {
    let mode = req.query["hub.mode"];
    let token = req.query["hub.verify_token"];
    let challenge = req.query["hub.challenge"];

    if (mode === "subscribe" && token === "token-bothub-redeurbana#2025") {
        console.log("✅ Webhook verificado com sucesso!");
        res.status(200).send(challenge); // Envia o desafio de volta ao Facebook
    } else {
        res.status(403).send("Falha na verificação do Webhook");
    }
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
