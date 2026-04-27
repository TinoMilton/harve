require('dotenv').config({ path: '.env.local' });

const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

const API_KEY = process.env.OMDB_API_KEY;
const BASE_URL = 'https://www.omdbapi.com/';

const TOP_5_MOVIES = [
  'tt0111161', // The Shawshank Redemption
  'tt0068646', // The Godfather
  'tt0468569', // The Dark Knight
  'tt0109830', // Forrest Gump
  'tt0169547'  // American Beauty
];

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

async function getMovieDetails(imdbID) {
  const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&i=${imdbID}&plot=short`);
  return response.data;
}

app.get('/movies', async (req, res) => {
  try {
    const movies = await Promise.all(
      TOP_5_MOVIES.map(imdbID => getMovieDetails(imdbID))
    );
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/movies/:id', async (req, res) => {
  try {
    const movie = await getMovieDetails(req.params.id);
    if (movie.Response === 'False') {
      return res.status(404).json({ error: movie.Error });
    }
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});