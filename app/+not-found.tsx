import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Stack, useRouter } from "expo-router";

export default function NotFoundScreen() {
  const router = useRouter();

  const goHome = () => {
    router.replace("/");
  };
  
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Not Found" }} />
      <View style={styles.container}>
        <TouchableOpacity onPress={goHome}>
          <Text style={styles.button}>Go back to Home screen!</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
