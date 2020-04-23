import { Dimensions, Platform } from "react-native";

export const getUniversalHeight = (x) =>
  Math.round((x * Dimensions.get("window").height) / 896);

export const getUniversalWidth = (x) =>
  Math.round((x * Dimensions.get("window").width) / 414);
