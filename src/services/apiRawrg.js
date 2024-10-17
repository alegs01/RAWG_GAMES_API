import axios from "axios";

const BASE_URL = "https://api.rawg.io/api";
const API_KEY = "63e54c8f229d441c8e3103ff99487a29"; // Tu API key

export const fetchInitialGames = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/games`, {
      params: {
        key: API_KEY,
        page_size: 20,
        ordering: "-rating", // Ordenar por rating
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching initial games:", error);
    return [];
  }
};

export const fetchGames = async (genreId) => {
  try {
    const response = await axios.get(`${BASE_URL}/games`, {
      params: {
        key: API_KEY,
        genres: genreId, // Filtro por género
        page_size: 20,
        ordering: "-rating",
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching games by genre:", error);
    return [];
  }
};
