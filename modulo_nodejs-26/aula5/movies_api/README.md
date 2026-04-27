# Movies API

A simple API server that provides details of the top 5 movies using the OMDb API.

## Requirements

- Node.js (v14+)
- OMDb API Key

## Getting an API Key

1. Go to [OMDb API](http://www.omdbapi.com/apikey.aspx)
2. Select "FREE" (1,000 daily limit)
3. Enter your email
4. Check your email for the API key

## Installation

```bash
npm install
```

## Configuration

1. Copy the example environment file:
```bash
cp .env.local.example .env.local
```

2. Edit `.env.local` and add your OMDb API key:
```
OMDB_API_KEY=your_api_key_here
```

## Running the Server

```bash
npm start
```

Server runs on **http://localhost:3000**

## API Endpoints

### Get Top 5 Movies

```bash
GET /movies
```

**Response:**
```json
[
  {
    "Title": "The Shawshank Redemption",
    "Year": "1994",
    "Rated": "R",
    "Released": "23 Sep 1994",
    "Runtime": "142 min",
    "Genre": "Drama",
    "Director": "Frank Darabont",
    "Writer": "Stephen King, Frank Darabont",
    "Actors": "Tim Robbins, Morgan Freeman, Bob Gunton",
    "Plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    "Language": "English",
    "Country": "United States",
    "Awards": "Nominated for 7 Oscars. 21 wins & 43 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
      { "Source": "Internet Movie Database", "Value": "9.3/10" },
      { "Source": "Rotten Tomatoes", "Value": "91%" },
      { "Source": "Metacritic", "Value": "82/100" }
    ],
    "Metascore": "82",
    "imdbRating": "9.3",
    "imdbVotes": "2,612,688",
    "imdbID": "tt0111161",
    "Type": "movie",
    "DVD": "27 Jan 1998",
    "BoxOffice": "$28,699,976",
    "Production": "Columbia Pictures",
    "Website": "N/A",
    "Response": "True"
  },
  ...
]
```

### Get Movie by ID

```bash
GET /movies/:id
```

**Example:**
```bash
GET /movies/tt0111161
```

## Using with Frontend

```javascript
fetch('http://localhost:3000/movies')
  .then(res => res.json())
  .then(data => console.log(data));
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| OMDB_API_KEY | Your OMDb API key | Yes |
| PORT | Server port (default: 3000) | No |
