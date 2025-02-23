import { useState, useEffect } from "react";
import ArticleForm from "./ArticleForm";
import ArticleItem from "./ArticleItem";
import "../styles/App.css";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true); // Stato per gestire il caricamento

  // Recupera gli articoli dal backend
  useEffect(() => {
    fetch("http://localhost:5000/api/articles")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Errore nel caricamento:", err);
        setLoading(false);
      });
  }, []);

  // Aggiunge un nuovo articolo con una richiesta POST
  const addArticle = (newArticle) => {
    fetch("http://localhost:5000/api/articles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newArticle),
    })
      .then((res) => res.json())
      .then((data) => setArticles([...articles, data]));
  };

  // Elimina un articolo con una richiesta DELETE
  const removeArticle = (id) => {
    fetch(`http://localhost:5000/api/articles/${id}`, {
      method: "DELETE",
    }).then(() => setArticles(articles.filter((article) => article.id !== id)));
  };

  return (
    <div className="container">
      <h1>Lista Articoli</h1>
      <ArticleForm addArticle={addArticle} />
      {loading ? (
        <p>Caricamento...</p>
      ) : articles.length === 0 ? (
        <p>Nessun articolo disponibile.</p>
      ) : (
        articles.map((article) => (
          <ArticleItem key={article.id} article={article} removeArticle={removeArticle} />
        ))
      )}
    </div>
  );
}