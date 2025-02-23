import { useState } from "react";
import ArticleForm from "./ArticleForm";
import ArticleItem from "./ArticleItem";
import { initialArticles } from "../data/articlesData";
import "../styles/styles.css";

export default function ArticleList() {
  const [articles, setArticles] = useState(initialArticles);

  const addArticle = (newArticle) => {
    setArticles([...articles, { id: Date.now(), ...newArticle }]);
  };

  const removeArticle = (id) => {
    setArticles(articles.filter((article) => article.id !== id));
  };

  return (
    <div className="container">
      <h1>Lista Articoli</h1>
      <ArticleForm addArticle={addArticle} />
      {articles.length === 0 ? <p>Nessun articolo disponibile.</p> : 
        articles.map((article) => (
          <ArticleItem key={article.id} article={article} removeArticle={removeArticle} />
        ))}
    </div>
  );
}
