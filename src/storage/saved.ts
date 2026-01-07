import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "saved.movies.v1";

export type SavedMovie = {
  imdbID: string;
  Title: string;
  Poster: string;
  Year: string;
};

export async function getAllSaved() {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export async function isSaved(imdbID: string) {
  const all = await getAllSaved();
  return Boolean(all[imdbID]);
}

export async function toggleSave(movie: SavedMovie) {
  const all = await getAllSaved();
  let nowSaved: boolean;

  if (all[movie.imdbID]) {
    delete all[movie.imdbID];
    nowSaved = false;
  } else {
    all[movie.imdbID] = movie;
    nowSaved = true;
  }

  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(all));

  return nowSaved;
}
