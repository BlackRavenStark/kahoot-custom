const express = require('express');
const path = require('path');

const app = express();
// 🔹 Autoriser l'affichage en iframe depuis n'importe où
app.use((req, res, next) => {
    res.setHeader("X-Frame-Options", "ALLOWALL");  // Supprime les restrictions d'iframe
    res.setHeader("Content-Security-Policy", "frame-ancestors *"); // Permet l'intégration dans Notion
    res.setHeader("Access-Control-Allow-Origin", "*"); // Autoriser toutes les origines
    next();
});

// Servir les fichiers statiques
app.use(express.static('public'));

// Route principale
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Serveur lancé sur http://localhost:${PORT}`);
});

// Servir les fichiers statiques
app.use(express.static('public'));

// Route principale
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
    console.log("📌 Le fichier server.js est exécuté...");
});
