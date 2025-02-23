const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); // Per leggere il body JSON delle richieste

// Simuliamo un database con un array
let articles = [
  { id: 1, title: "Primo articolo", author: "Mario", content: "Contenuto del primo articolo", category: "News", published: true },
  { id: 2, title: "Secondo articolo", author: "Luca", content: "Contenuto del secondo articolo", category: "Tech", published: false },
];

// Endpoint per ottenere tutti gli articoli
app.get("/api/articles", (req, res) => {
  res.json(articles);
});

// Endpoint per aggiungere un articolo
app.post("/api/articles", (req, res) => {
  const newArticle = { id: Date.now(), ...req.body };
  articles.push(newArticle);
  res.status(201).json(newArticle);
});

// Endpoint per eliminare un articolo
app.delete("/api/articles/:id", (req, res) => {
  const id = parseInt(req.params.id);
  articles = articles.filter(article => article.id !== id);
  res.status(204).send();
});

// Avvia il server
app.listen(5000, () => console.log("Server avviato su http://localhost:5000"));
