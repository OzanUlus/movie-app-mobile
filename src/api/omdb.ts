//API:http://www.omdbapi.com/?apikey=ce2bad45&s=superman

const API_BASE = "http://www.omdbapi.com/";
const API_KEY = "ce2bad45";

async function searchMovies(query: string) {
  try {
    const url = `${API_BASE}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`;
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log("Failed to fetch movies")
    if(error instanceof Error){
        console.log("Failed detail: ", error)
    }else{
        console.log("Unknown error: ", error)
    }
  }
}
export default searchMovies;
