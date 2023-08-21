const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json()); // Permet de gérer les requêtes JSON

app.get("/", (req, res) => {
  res.send("Bienvenue sur le serveur de l'application Airbnb Clone !");
});

const authRoutes = require("./routes/auth");

// ...

app.use("/auth", authRoutes);

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${PORT}`);
});
