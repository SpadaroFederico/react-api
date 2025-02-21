import { useState, useEffect } from "react";
import { fetchPosts, addPost, deletePost } from "./api";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newPost, setNewPost] = useState({
    title: "",
    author: "",
    content: "",
    category: "",
    published: false,
  });

  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchPosts();
      setPosts(data);
      setLoading(false);
    };
    getPosts();
  }, []);

  // Funzione per gestire l'invio del form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const post = { ...newPost };
    await addPost(post); // Aggiungi il nuovo post
    const updatedPosts = await fetchPosts(); // Ricarica i post
    setPosts(updatedPosts);
    setNewPost({ title: "", author: "", content: "", category: "", published: false }); // Resetta il form
  };

  // Funzione per gestire la cancellazione di un post
  const handleDelete = async (postId) => {
    await deletePost(postId);
    const updatedPosts = await fetchPosts(); // Ricarica i post
    setPosts(updatedPosts);
  };

  return (
    <div>
      <h1>Lista Articoli</h1>

      {/* Form per aggiungere un post */}
      <form onSubmit={handleSubmit}>
        <label>Titolo:</label>
        <input
          type="text"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          required
        />

        <label>Autore:</label>
        <input
          type="text"
          value={newPost.author}
          onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
          required
        />

        <label>Contenuto:</label>
        <textarea
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
          required
        />

        <label>Categoria:</label>
        <input
          type="text"
          value={newPost.category}
          onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
          required
        />

        <label>
          Pubblicato:
          <input
            type="checkbox"
            checked={newPost.published}
            onChange={(e) => setNewPost({ ...newPost, published: e.target.checked })}
          />
        </label>

        <button type="submit">Aggiungi Post</button>
      </form>

      {/* Visualizza i post */}
      {loading ? (
        <p>Caricamento in corso...</p>
      ) : posts.length === 0 ? (
        <p>Nessun post disponibile.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <p><strong>Autore:</strong> {post.author}</p>
              <p><strong>Categoria:</strong> {post.category}</p>
              <p><strong>Pubblicato:</strong> {post.published ? 'Sì' : 'No'}</p>
              <button onClick={() => handleDelete(post.id)}>Elimina</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;

