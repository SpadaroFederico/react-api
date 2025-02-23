export default function ArticleItem({ article, removeArticle }) {
    return (
      <div className="article">
        <h2>{article.title}</h2>
        <p><b>Autore:</b> {article.author}</p>
        <p><b>Categoria:</b> {article.category}</p>
        <p>{article.content}</p>
        <p><b>Stato:</b> {article.published ? "Pubblicato ✅" : "Bozza ❌"}</p>
        <span className="delete-btn" onClick={() => removeArticle(article.id)}>🗑️ Elimina</span>
      </div>
    );
  }
  