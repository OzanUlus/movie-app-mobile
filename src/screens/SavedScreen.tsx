import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { getAllSaved, SavedMovie } from "../storage/saved";
import { s } from "react-native-size-matters";
import MovieCard from "../components/MovieCard";
import { useIsFocused } from "@react-navigation/native";
import colors from "../theme/color";
import { OmdSearchItem } from "../api/omdb";


const SavedScreen = () => {
  const [movies, setMovies] = useState<OmdSearchItem[]>([]);
  const isFocus = useIsFocused();

  const getAllMovies = async () => {
    const all = await getAllSaved();
    setMovies(Object.values(all));
  };

  useEffect(() => {
    getAllMovies();
  }, [isFocus]);

  return (
    <SafeAreaView style={styles.container} edges={[]}>
      {movies.length === 0 ? (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            padding: s(20),
          }}
        >
          <Text>No saved movies yet</Text>
        </View>
      ) : (
        <FlatList
          data={movies}
          numColumns={2}
          keyExtractor={(mov) => mov.imdbID}
          renderItem={({ item }) => <MovieCard movie={item} />}
        />
      )}
    </SafeAreaView>
  );
};

export default SavedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
});
