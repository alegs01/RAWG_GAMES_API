import axios from "axios";

const BASE_URL = "https://api.rawg.io/api";
const API_KEY = "63e54c8f229d441c8e3103ff99487a29"; // Tu API key

export const fetchInitialGames = async (page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/games`, {
      params: {
        key: API_KEY,
        page_size: 20,
        page: page,
        ordering: "-rating", // Ordenar por rating
        dates: "2024-10-01,2024-10-31",
        stores: "1",
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching initial games:", error);
    return [];
  }
};

export const fetchGames = async (genreId = "", platformId = "", page = 1) => {
  try {
    const params = {
      key: API_KEY,
      page_size: 20,
      page: page,
      ...(genreId && { genres: genreId }),
      ...(platformId && { platforms: platformId }),
    };

    const response = await axios.get(`${BASE_URL}/games`, { params });
    return response.data.results; // Devuelve los resultados de la API
  } catch (error) {
    console.error("Error fetching games:", error);
    return [];
  }
};
