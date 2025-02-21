import axios from "axios";

const API_URL = "http://localhost:3000/posts"; // Assicurati che sia la porta giusta del backend

// Funzione per ottenere i post
export const fetchPosts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // Restituisce l'array dei post
  } catch (error) {
    console.error("Errore nel recupero dei post:", error);
    return [];
  }
};

// Funzione per aggiungere un post
export const addPost = async (post) => {
  try {
    const response = await axios.post(API_URL, post);
    return response.data; // Restituisce il post aggiunto
  } catch (error) {
    console.error("Errore nell'aggiungere il post:", error);
  }
};

// Funzione per cancellare un post
export const deletePost = async (postId) => {
  try {
    await axios.delete(`${API_URL}/${postId}`);
  } catch (error) {
    console.error("Errore nella cancellazione del post:", error);
  }
};
