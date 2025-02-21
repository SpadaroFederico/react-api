import axios from "axios";

// definisco l'url dell'api
const API_URL = "http://localhost:3000/posts"; 

// recupero i dati
export const fetchPosts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // Restituisce l'array di post
  } catch (error) {
    console.error("Errore nel recupero dei post:", error);
    return [];
  }
};
