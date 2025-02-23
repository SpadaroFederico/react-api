import { useState } from "react";

export default function ArticleForm({ addArticle }) {
  const [newArticle, setNewArticle] = useState({
    title: "",
    author: "",
    content: "",
    category: "",
    published: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newArticle.title || !newArticle.author) return;
    addArticle(newArticle);
    setNewArticle({ title: "", author: "", content: "", category: "", published: false });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newArticle.title}
        onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })}
        placeholder="Titolo"
      />
      <input
        type="text"
        value={newArticle.author}
        onChange={(e) => setNewArticle({ ...newArticle, author: e.target.value })}
        placeholder="Autore"
      />
      <textarea
        value={newArticle.content}
        onChange={(e) => setNewArticle({ ...newArticle, content: e.target.value })}
        placeholder="Contenuto"
      />
      <input
        type="text"
        value={newArticle.category}
        onChange={(e) => setNewArticle({ ...newArticle, category: e.target.value })}
        placeholder="Categoria"
      />
      <label>
        <input
          type="checkbox"
          checked={newArticle.published}
          onChange={(e) => setNewArticle({ ...newArticle, published: e.target.checked })}
        />
        Pubblicato
      </label>
      <button type="submit">Aggiungi</button>
    </form>
  );
}
