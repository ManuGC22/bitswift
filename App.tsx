import { useEffect } from "react";
import { StyleSheet, SafeAreaView, Platform } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { TamaguiProvider } from "tamagui";
import { CryptoOverviewFeature } from "@/Features";
import Colors from "@/Core/Colors";
import config from "./tamagui.config";

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
    <TamaguiProvider config={config}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <CryptoOverviewFeature.Screens.CryptoOverviewScreen />
        </SafeAreaView>
      </SafeAreaProvider>
    </TamaguiProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: Platform.OS === "android" ? 16 : 0,
  },
});
