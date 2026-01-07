//API:http://www.omdbapi.com/?apikey=ce2bad45&s=superman

const API_BASE = "http://www.omdbapi.com/";
const API_KEY = "ce2bad45";

export type OmdSearchItem = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

export type OmdbDetail = {
  Title: string;
  Year: string;
  Rated?: string;
  Released?: string;
  Runtime?: string;
  Genre?: string;
  Director?: string;
  Writer?: string;
  Actors?: string;
  Plot?: string;
  Language?: string;
  Country?: string;
  Awards?: string;
  Poster: string;
  Ratings?: Array<{ Source: string; Value: string }>;
  Metascore?: string;
  imdbRating?: string;
  imdbVotes?: string;
  imdbID: string;
  Type?: string;
};

export async function searchMovies(query: string, page: number = 1) {
  try {
    const url = `${API_BASE}?apikey=${API_KEY}&s=${encodeURIComponent(query)}&page=${page}`;
    const response = await fetch(url);
    const data = await response.json();
   console.log(data)
   return data
  } catch (error) {
    console.log("Failed to fetch movies");
    if (error instanceof Error) {
      console.log("Failed detail: ", error);
    } else {
      console.log("Unknown error: ", error);
    }
  }
}

export async function getMovieDetails(imdbId: string) {
  try {
    const url = `${API_BASE}?apikey=${API_KEY}&i=${encodeURIComponent(imdbId)}&plot=full`;
    const response = await fetch(url);
    const data = await response.json();
   console.log(data)
   return data
  } catch (error) {
    console.log("Failed to fetch movie details");
    if (error instanceof Error) {
      console.log("Failed detail: ", error);
    } else {
      console.log("Unknown error: ", error);
    }
  }
}


