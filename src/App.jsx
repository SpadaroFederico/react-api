import { useState, useEffect } from "react";
import { fetchPosts } from "./api";

function App() {
  const [posts, setPosts] = useState([]);

  // stato per il caricamento
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchPosts();
      setPosts(data);
      setLoading(false);
    };
    getPosts();
  }, []);

  return (
    <div>
      <h1>Lista Articoli</h1>
      
      {loading ? (
        <p>Caricamento in corso...</p>
      ) : posts.length === 0 ? (
        <p>Nessun post disponibile.</p>
      ) : (
        <ul>

          {/* map degli object post */}
          {posts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <p><strong>Autore:</strong> {post.author}</p>
              <p><strong>Categoria:</strong> {post.category}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
