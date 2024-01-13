const express = require("express");
const app = express();
const port = 3000; // ou tout autre port que vous préférez

// Définir une route dynamique avec un paramètre d'ID
app.get("/utilisateur/:id", (req, res) => {
  const userId = req.params.id;
  // Utilisez userId comme vous le souhaitez (par exemple, recherchez en base de données)
  res.send(`Informations sur l'utilisateur avec l'ID : ${userId}`);
});

// Écoute du serveur
app.listen(port, () => {
  console.log(`Serveur en ecoute sur le port ${port}`);
});
