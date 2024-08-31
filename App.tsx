import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
    PoppinsLight: require("./assets/fonts/Poppins-Light.ttf"),
    PoppinsMedium: require("./assets/fonts/Poppins-Medium.ttf"),
    PoppinsSemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      // Add splash screen
    }
  }, [loaded]);

  if (!loaded) {
    return null; // Render nothing until fonts are loaded
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
