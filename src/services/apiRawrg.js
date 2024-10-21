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

export const fetchGames = async (
  genreId = null,
  platformId = null,
  page = 1,
  filter = null,
  year = null
) => {
  const params = {
    key: API_KEY,
    page_size: 20,
    page: page,
  };

  if (genreId) {
    params.genres = genreId;
  }

  if (platformId) {
    params.platforms = platformId;
  }

  if (filter === "rating") {
    params.ordering = "-rating"; // Ordenar por mejor calificados
  }

  if (filter === "metacritic") {
    params.ordering = "-metacritic"; // Ordenar por mejor calificados
  }

  if (filter === "name") {
    params.ordering = "-name"; // Ordenar por mejor calificados
  }

  if (filter === "released" && year) {
    params.dates = `${year}-01-01,${year}-12-31`; // Filtrar por lanzamientos de este año
    params.ordering = "-released"; // Ordenar por fecha de lanzamiento
  }

  try {
    const response = await axios.get(`${BASE_URL}/games`, { params });
    return response.data.results; // Devuelve los resultados de la API
  } catch (error) {
    console.error("Error fetching games:", error);
    return [];
  }
};

export const fetchGamesYear = async (
  genreId = null,
  platformId = null,
  page = 1,
  filter = null,
  year = 2024 // Definir el año predeterminado
) => {
  const params = {
    key: API_KEY,
    page_size: 20,
    page: page,
    dates: `${year}-01-01,${year}-12-31`, // Filtrar juegos lanzados en el año 2024
  };

  if (genreId) {
    params.genres = genreId;
  }

  if (platformId) {
    params.platforms = platformId;
  }

  if (filter === "rating") {
    params.ordering = "-rating"; // Ordenar por mejor calificados
  }

  if (filter === "released") {
    params.ordering = "-released"; // Ordenar por fecha de lanzamiento
  }

  try {
    const response = await axios.get(`${BASE_URL}/games`, { params });
    return response.data.results; // Devuelve los resultados de la API
  } catch (error) {
    console.error("Error fetching games:", error);
    return [];
  }
};
