import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { s, vs } from "react-native-size-matters";
import colors from "../theme/color";

const MovieInfo = ({ label }: { label?: string }) => {
  return (
    <View style={styles.labelContainer}>
      <Text style={styles.labelText}>{label || ""}</Text>
    </View>
  );
};

export default MovieInfo;

const styles = StyleSheet.create({
  labelContainer: {
    backgroundColor: colors.movieBacgroundColor,
    borderRadius: 12,
    paddingHorizontal: s(12),
    paddingVertical: vs(6),
    borderWidth: 1,
    borderColor: colors.borderColor,
  },
  labelText: {
    fontWeight: "700",
    color: colors.textColor,
  },
});
