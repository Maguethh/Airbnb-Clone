const express = require("express");

const cors = require("cors");

const mongoose = require("mongoose");

require("dotenv").config();

const connectionString = process.env.MONGODB_CONNECTION_STRING;

const app = express();

const PORT = process.env.PORT || 4000;

const userRoutes = require("./routes/user");

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connexion à la base de données réussie");

    // Démarrer le serveur
    app.listen(PORT, () => {
      console.log(`Le serveur est en cours d'exécution sur le port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Erreur lors de la connexion à la base de données:", error);
  });

app.use(express.json());

app.use(cors());

app.use("/api/auth", userRoutes);
