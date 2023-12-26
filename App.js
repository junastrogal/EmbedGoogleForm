import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

// npx expo install react-native-webview

export default function App() {
  return (
    <WebView
      style={styles.container}
      source={{ uri: "https://docs.google.com/forms/d/e/1FAIpQLSfHB7665479MX-Ky_qTAmmz0jds4J_-Wb5Lkl1hiSacaD4ZWA/viewform?usp=sf_link" }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 64,
  },
});